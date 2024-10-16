import { useState } from 'react';
import { AvatarImage, AvatarFallback, Avatar } from "@/app/dashboard/ui/avatar";
import { Button } from "@/app/dashboard/ui/button";
import { CardTitle, CardHeader, CardContent, Card } from "@/app/dashboard/ui/card";
import { Badge } from "@/app/dashboard/ui/badge";
import { Calendar } from "@/app/dashboard/ui/calendar";
import { Textarea } from "@/app/dashboard/ui/textarea";
import { Input } from "@/app/dashboard/ui/input";
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/app/dashboard/ui/table";
import ThreeDModel from './ThreeDModel';

export default function Dashboard() {
  // State for barber's profile
  const [profile, setProfile] = useState({
    name: 'Konstantin Shelby',
    experience: '5 years',
    specialties: 'Fades, Beards, Modern Styles',
    verification: 'verified',
    comments: '',
    services: [
      { name: "Fade Cut", price: "$25" },
      { name: "Beard Trim", price: "$15" },
      { name: "Full Haircut & Styling", price: "$40" },
      { name: "Scalp Treatment", price: "$30" },
    ],
    achievements: [
      "Certified Master Barber",
      "Winner - Best Barber in Town 2022",
      "Advanced Beard Styling Workshop - 2021"
    ],
  });

  const [images, setImages] = useState([]);
  const [selectedModel, setSelectedModel] = useState("/random.glb");
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

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

  const handleServiceChange = (index, field, value) => {
    const updatedServices = [...profile.services];
    updatedServices[index][field] = value;
    setProfile({ ...profile, services: updatedServices });
  };

  const handleAchievementChange = (index, value) => {
    const updatedAchievements = [...profile.achievements];
    updatedAchievements[index] = value;
    setProfile({ ...profile, achievements: updatedAchievements });
  };

  const handleAddService = () => {
    setProfile({
      ...profile,
      services: [...profile.services, { name: "", price: "" }],
    });
  };

  const handleAddAchievement = () => {
    setProfile({
      ...profile,
      achievements: [...profile.achievements, ""],
    });
  };

  const saveProfile = async () => {
    setIsSaving(true);
    setSaveSuccess(false);
    // Simulate saving to a backend/database
    setTimeout(() => {
      setIsSaving(false);
      setSaveSuccess(true);
    }, 1500);
  };

  return (
    <div className="bg-[#f4f7fa] min-h-screen">
      <div className="flex h-full">
        <main className="flex-1 p-5">
          <div className="flex justify-between mb-5">
            <h1 className="text-xl font-semibold">Edit Profile - {profile.name}</h1>
            <div className="flex items-center">
              <Button onClick={saveProfile} variant="outline">
                {isSaving ? "Saving..." : "Save Profile"}
              </Button>
              {saveSuccess && <p className="text-green-500 ml-4">Profile Saved!</p>}
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {/* Profile Overview */}
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Profile Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar>
                    <AvatarImage alt="Barber" src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>BS</AvatarFallback>
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
                </div>
                <div className="text-sm">
                  <p>Experience: 
                    <Input 
                      name="experience" 
                      value={profile.experience} 
                      onChange={handleInputChange} 
                      placeholder="Years of Experience" 
                    />
                  </p>
                  <p>Specialties: 
                    <Input 
                      name="specialties" 
                      value={profile.specialties} 
                      onChange={handleInputChange} 
                      placeholder="Specialties" 
                    />
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Services Offered */}
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Services Offered</CardTitle>
              </CardHeader>
              <CardContent>
                {profile.services.map((service, index) => (
                  <div key={index} className="mb-3 flex">
                    <Input
                      value={service.name}
                      onChange={(e) => handleServiceChange(index, "name", e.target.value)}
                      placeholder="Service Name"
                      className="mr-2"
                    />
                    <Input
                      value={service.price}
                      onChange={(e) => handleServiceChange(index, "price", e.target.value)}
                      placeholder="Price"
                    />
                  </div>
                ))}
                <Button onClick={handleAddService} variant="outline">
                  Add Service
                </Button>
              </CardContent>
            </Card>

            {/* Achievements & Certifications */}
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Achievements & Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                {profile.achievements.map((achievement, index) => (
                  <div key={index} className="mb-3">
                    <Input
                      value={achievement}
                      onChange={(e) => handleAchievementChange(index, e.target.value)}
                      placeholder="Achievement"
                    />
                  </div>
                ))}
                <Button onClick={handleAddAchievement} variant="outline">
                  Add Achievement
                </Button>
              </CardContent>
            </Card>

            {/* 3D Hair Model Viewer */}
            <Card className="col-span-1">
              <CardHeader>
              <CardTitle>3D Hair Model Viewer</CardTitle>
              </CardHeader>
              <CardContent>
              <div className="w-full h-40 mb-4 flex items-center justify-center mt-4"> {/* Bring the 3D viewer down */}
                <ThreeDModel modelPath={selectedModel} />
              </div>
              <div>
                <label htmlFor="modelSelect" className="block text-sm font-semibold mb-2">
                Select a Previous Visualization:
                </label>
                <select
                id="modelSelect"
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                >
                <option value="/random.glb">Modern Pompadour</option>
                <option value="/random.glb">Buzz Cut</option>
                <option value="/random.glb">Layered Shag</option>
                </select>
              </div>
              </CardContent>
            </Card>

            {/* Haircut Gallery */}
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Haircut Gallery</CardTitle>
              </CardHeader>
              <CardContent>
                <input type="file" multiple onChange={handleImageUpload} />
                <div className="flex overflow-x-auto gap-4 mt-4">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      alt={`Haircut ${index + 1}`}
                      className="rounded-md"
                      height="100"
                      src={URL.createObjectURL(image)}
                      style={{ objectFit: "cover" }}
                      width="100"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Comments Section */}
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Comments/Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  name="comments"
                  value={profile.comments}
                  onChange={handleInputChange}
                  placeholder="Add notes about the customer's preferences or concerns."
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
