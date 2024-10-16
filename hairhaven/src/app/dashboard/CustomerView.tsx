import { useState } from 'react';
import { AvatarImage, AvatarFallback, Avatar } from "@/app/dashboard/ui/avatar";
import { Button } from "@/app/dashboard/ui/button";
import { CardTitle, CardHeader, CardContent, Card } from "@/app/dashboard/ui/card";
import { Badge } from "@/app/dashboard/ui/badge";
// import { Calendar } from "@/app/dashboard/ui/calendar";
import { Textarea } from "@/app/dashboard/ui/textarea";
import { Input } from "@/app/dashboard/ui/input"; // Assuming you have an Input component
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/app/dashboard/ui/table";

export default function Dashboard() {
  const [profile, setProfile] = useState({
    name: 'Konstantin Shelby',
    accountId: '73579',
    referral: 'active',
    verification: 'verified',
    stylePreference: 'Prefers shorter sides with more volume on top. Likes to experiment with new trends.',
    comments: '',
  });

  const [isSaving, setIsSaving] = useState(false); // For saving indicator
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [images, setImages] = useState([]);
  const [barberChat, setBarberChat] = useState([]);
  const [aiChat, setAiChat] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleImageUpload = (e) => {
    const uploadedImages = Array.from(e.target.files);
    setImages([...images, ...uploadedImages]);
  };

  const handleSendBarberMessage = (message) => {
    setBarberChat([...barberChat, { sender: "customer", message }]);
  };

  const handleSendAIMessage = (message) => {
    setAiChat([...aiChat, { sender: "customer", message }, { sender: "ai", message: "This is the AI response." }]);
  };

  const saveProfile = async () => {
    setIsSaving(true);
    setSaveSuccess(false);
    // Simulate an API call
    setTimeout(() => {
      setIsSaving(false);
      setSaveSuccess(true);
    }, 2000);
  };

  return (
    <div className="bg-[#f4f7fa] min-h-screen">
      <div className="flex h-full">
        <main className="flex-1 p-5">
          <div className="flex justify-between mb-5">
            <h1 className="text-xl font-semibold">{profile.name}</h1>
            <Button variant="outline" onClick={saveProfile}>
              {isSaving ? "Saving..." : "Save Profile"}
            </Button>
            {saveSuccess && <p className="text-green-500">Profile Saved!</p>}
          </div>
          <div className="grid grid-cols-3 gap-4">
            {/* Profile Details */}
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar>
                    <AvatarImage alt="Customer" src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>CS</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <Input
                      name="name"
                      value={profile.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      className="font-semibold"
                    />
                    <Badge variant="secondary">{profile.verification}</Badge>
                  </div>
                  <MoreVerticalIcon className="text-gray-400" />
                </div>
                <div className="text-sm">
                  <p>
                    Account ID: <Input name="accountId" value={profile.accountId} onChange={handleInputChange} />
                  </p>
                  <p>
                    Referral program: <Input name="referral" value={profile.referral} onChange={handleInputChange} />
                  </p>
                  <p>
                    Account verification: <Input name="verification" value={profile.verification} onChange={handleInputChange} />
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Image Gallery */}
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Haircut Gallery</CardTitle>
              </CardHeader>
              <CardContent>
                <input type="file" multiple onChange={handleImageUpload} />
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      alt={`Haircut ${index + 1}`}
                      className="rounded-md"
                      height="100"
                      src={URL.createObjectURL(image)}
                      style={{
                        objectFit: "cover",
                      }}
                      width="100"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Style Preferences */}
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Style Preferences</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  name="stylePreference"
                  value={profile.stylePreference}
                  onChange={handleInputChange}
                  placeholder="Update style preferences"
                />
              </CardContent>
            </Card>

            {/* Barber Chat */}
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Chat with Barber</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48 overflow-y-auto">
                  {barberChat.map((chat, index) => (
                    <p key={index} className={chat.sender === "customer" ? "text-right" : ""}>
                      <strong>{chat.sender === "customer" ? "You" : "Barber"}:</strong> {chat.message}
                    </p>
                  ))}
                </div>
                <Textarea
                  placeholder="Type your message to the barber"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSendBarberMessage(e.target.value);
                      e.target.value = '';
                    }
                  }}
                />
              </CardContent>
            </Card>

            {/* AI Expert Chat */}
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Chat with AI Hair Expert</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48 overflow-y-auto">
                  {aiChat.map((chat, index) => (
                    <p key={index} className={chat.sender === "customer" ? "text-right" : ""}>
                      <strong>{chat.sender === "customer" ? "You" : "AI Expert"}:</strong> {chat.message}
                    </p>
                  ))}
                </div>
                <Textarea
                  placeholder="Ask the AI Hair Expert"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSendAIMessage(e.target.value);
                      e.target.value = '';
                    }
                  }}
                />
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

function MoreVerticalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="19" r="1" />
    </svg>
  );
}