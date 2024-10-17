import { useState } from "react";
import { AvatarImage, AvatarFallback, Avatar } from "@/app/dashboard/ui/avatar";
import { Button } from "@/app/dashboard/ui/button";
import { CardTitle, CardHeader, CardContent, Card } from "@/app/dashboard/ui/card";
import Calendar from "@/app/dashboard/ui/calendar"; // Ensure Calendar is default export
import Modal from "@/app/dashboard/ui/modal"; // Ensure Modal is correctly imported
import AddUserForm from "@/app/dashboard/ui/AddUserForm";
import RAGBot from "@/app/dashboard/ui/RAGBot"; // We'll create this component

export default function BarberDashboard() {
  // State to manage users
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      avatar: "/john-doe.jpg",
      preferences: {
        style: "Prefers modern styles.",
        hairTexture: "Curly",
        hairLength: "Short",
        hairType: "Thick",
        hairCondition: "Healthy",
      },
      appointmentDate: new Date(2024, 3, 15), // Months are 0-indexed
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "/jane-smith.jpg",
      preferences: {
        style: "Likes traditional cuts.",
        hairTexture: "Straight",
        hairLength: "Medium",
        hairType: "Fine",
        hairCondition: "Dry",
      },
      appointmentDate: new Date(2024, 4, 20),
    },
  ]);

  // State to manage modal visibility and selected user
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // Function to handle date click
  const handleDateClick = (date) => {
    // Find user with matching appointment date
    const user = users.find(
      (user) =>
        user.appointmentDate.toDateString() === date.toDateString()
    );
    if (user) {
      setSelectedUser(user);
      setIsModalOpen(true);
    } else {
      alert("No appointment scheduled on this date.");
    }
  };

  // Function to add a new user
  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div className="bg-[#f4f7fa] min-h-screen flex">
      <main className="flex-1 p-8">
        <div className="flex justify-between mb-6 w-full">
          <h1 className="text-2xl font-semibold">Welcome, Barber!</h1>
          <AddUserForm onAddUser={addUser} />
        </div>

        <div className="grid grid-cols-3 gap-6 w-full">
          {/* Upcoming Schedule Card */}
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Upcoming Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                className="rounded-md border border-gray-200 mb-4 dark:border-gray-800"
                mode="single"
                onDateClick={handleDateClick} // Handle date clicks
                users={users} // Pass users to highlight dates
              />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Upcoming Visits</h3>
                  <ul>
                    {users
                      .filter((user) => user.appointmentDate >= new Date())
                      .map((user) => (
                        <li key={user.id} className="mb-2">
                          {user.appointmentDate.toLocaleDateString()} - {user.name}
                        </li>
                      ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Past Visits</h3>
                  <ul>
                    {users
                      .filter((user) => user.appointmentDate < new Date())
                      .map((user) => (
                        <li key={user.id} className="mb-2">
                          {user.appointmentDate.toLocaleDateString()} - {user.name}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Query Customer Details Card (RAG-Based Bot) */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Customer Query Bot</CardTitle>
            </CardHeader>
            <CardContent>
              <RAGBot users={users} />
            </CardContent>
          </Card>

          {/* Hair Visualizations Card */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Hair Visualizations</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                alt="Haircut"
                className="mb-4 w-full h-auto rounded-md"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "1 / 1",
                  objectFit: "cover",
                }}
              />
              <p className="text-sm">Recommended style: Modern Pompadour</p>
            </CardContent>
          </Card>

          {/* Style Preferences Card */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Style Preferences</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Prefers shorter sides with more volume on top. Likes to experiment with new trends.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* User Profile Modal */}
      {isModalOpen && selectedUser && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <Avatar>
                <AvatarImage src={selectedUser.avatar} alt={selectedUser.name} />
                <AvatarFallback>{selectedUser.name[0]}</AvatarFallback>
              </Avatar>
              <h2 className="ml-4 text-xl font-semibold">{selectedUser.name}</h2>
            </div>
            <p className="mb-2">
              <strong>Appointment Date:</strong> {selectedUser.appointmentDate.toLocaleDateString()}
            </p>
            <p className="mb-2">
              <strong>Preferences:</strong> {selectedUser.preferences}
            </p>
            <Button onClick={() => setIsModalOpen(false)}>Close</Button>
          </div>
        </Modal>
      )}
    </div>
  );
}