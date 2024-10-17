import { useState, useEffect } from 'react';
import { connect } from 'livekit-client';
import { AvatarImage, AvatarFallback, Avatar } from "@/app/dashboard/ui/avatar";
import { Button } from "@/app/dashboard/ui/button";
import { CardTitle, CardHeader, CardContent, Card } from "@/app/dashboard/ui/card";
import { Badge } from "@/app/dashboard/ui/badge";
import { Input } from "@/app/dashboard/ui/input";
import { Textarea } from "@/app/dashboard/ui/textarea";
import { FaMicrophone } from 'react-icons/fa'; // Microphone icon from react-icons

export default function Dashboard() {
  const [profile, setProfile] = useState({
    name: 'Konstantin Shelby',
    accountId: '73579',
    referral: 'active',
    verification: 'verified',
    hairStyle: 'Short sides, volume on top',
    hairLength: 'Medium',
    facialStructure: 'Oval',
    hairType: 'Curly',
    hairHealth: 'Healthy',
    pastHairstyles: 'Undercut, Pompadour',
    comments: '',
  });

  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [images, setImages] = useState([]);
  const [audioConnected, setAudioConnected] = useState(false); 
  const [audioElement, setAudioElement] = useState(null); 

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

  const autoSave = async () => {
    setIsSaving(true);
    setSaveSuccess(false);
    setTimeout(() => {
      setIsSaving(false);
      setSaveSuccess(true);
    }, 1000);
  };

  useEffect(() => {
    if (profile.comments) {
      autoSave();
    }
  }, [profile.comments]);

  // Function to handle connecting to LiveKit for live audio streaming
  const connectToLiveKit = async () => {
    if (audioConnected) return;

    try {
      const room = await connect(process.env.NEXT_PUBLIC_LIVEKIT_URL, {
        token: process.env.NEXT_PUBLIC_LIVEKIT_API_KEY,
      });
      room.on('trackSubscribed', (track) => {
        if (track.kind === 'audio') {
          const audioElement = track.attach();
          document.body.append(audioElement);
          setAudioElement(audioElement);
        }
      });

      // Feed profile details as context to the audio stream
      const context = {
        hairStyle: profile.hairStyle,
        hairLength: profile.hairLength,
        facialStructure: profile.facialStructure,
        hairType: profile.hairType,
        hairHealth: profile.hairHealth,
        pastHairstyles: profile.pastHairstyles,
      };
      console.log("Context fed to LLM:", context);

      setAudioConnected(true);
    } catch (error) {
      console.error("Failed to connect to LiveKit:", error);
    }
  };

  // Function to disconnect the audio
  const disconnectAudio = () => {
    if (audioElement) {
      audioElement.remove();
      setAudioConnected(false);
    }
  };

  return (
    <div className="bg-[#f4f7fa] min-h-screen">
      <div className="flex h-full">
        <main className="flex-1 p-5">
          <div className="flex justify-between mb-5">
            <h1 className="text-xl font-semibold">{profile.name}</h1>
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
                </div>
                <div className="text-sm">
                  <p>Account ID: <Input name="accountId" value={profile.accountId} onChange={handleInputChange} /></p>
                  <p>Referral program: <Input name="referral" value={profile.referral} onChange={handleInputChange} /></p>
                  <p>Account verification: <Input name="verification" value={profile.verification} onChange={handleInputChange} /></p>
                </div>
              </CardContent>
            </Card>

            {/* Live Audio Stream */}
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Live Audio Streaming</CardTitle>
              </CardHeader>
              <CardContent>
                <Button onClick={audioConnected ? disconnectAudio : connectToLiveKit}>
                  {audioConnected ? "Stop Live Audio" : "Start Live Audio"}
                </Button>
                {/* Microphone Icon with Animation */}
                {audioConnected && (
                  <div className="flex justify-center items-center mt-4">
                    <FaMicrophone className="text-red-500 animate-pulse" size={50} />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Style Preferences */}
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Style Preferences</CardTitle>
              </CardHeader>
              <CardContent>
                <Input
                  name="hairStyle"
                  value={profile.hairStyle}
                  onChange={handleInputChange}
                  placeholder="Preferred Hairstyle"
                />
                <Input
                  name="hairLength"
                  value={profile.hairLength}
                  onChange={handleInputChange}
                  placeholder="Hair Length"
                />
                <Input
                  name="facialStructure"
                  value={profile.facialStructure}
                  onChange={handleInputChange}
                  placeholder="Facial Structure"
                />
                <Input
                  name="hairType"
                  value={profile.hairType}
                  onChange={handleInputChange}
                  placeholder="Hair Type"
                />
                <Input
                  name="hairHealth"
                  value={profile.hairHealth}
                  onChange={handleInputChange}
                  placeholder="Hair Health"
                />
                <Textarea
                  name="pastHairstyles"
                  value={profile.pastHairstyles}
                  onChange={handleInputChange}
                  placeholder="Past Hairstyles"
                />
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
                      style={{ objectFit: "cover" }}
                      width="100"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}