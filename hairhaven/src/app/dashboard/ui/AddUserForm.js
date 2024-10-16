// components/dashboard/ui/AddUserForm.js
import { useState } from "react";
import { Button } from "@/app/dashboard/ui/Button";

export default function AddUserForm({ onAddUser }) {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [preferences, setPreferences] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !appointmentDate) {
      alert("Please provide at least a name and appointment date.");
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      avatar: avatar || "/default-avatar.png",
      preferences,
      appointmentDate: new Date(appointmentDate),
      hairstyles: ["/hairstyles/default1.jpg", "/hairstyles/default2.jpg"],
      chatHistory: [
        { sender: "bot", text: `Hello ${name}! Your appointment is scheduled for ${new Date(appointmentDate).toLocaleDateString()}.` },
      ],
    };

    onAddUser(newUser);
    // Reset form
    setName("");
    setAvatar("");
    setPreferences("");
    setAppointmentDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <input
        type="text"
        placeholder="Name"
        className="border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="date"
        className="border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={appointmentDate}
        onChange={(e) => setAppointmentDate(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Avatar URL (optional)"
        className="border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
      />
      <Button type="submit">Add User</Button>
    </form>
  );
}
