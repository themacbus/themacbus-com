import { useState } from 'react';
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function AyeLetsRideApp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastInitial: '',
    address: '',
    pickupTime: '',
    phone: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Ride Request:", formData);
    alert("Your ride request has been submitted!");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Aye, Let’s Ride – MAC Bus Request</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <Input
          name="lastInitial"
          placeholder="Last Initial"
          value={formData.lastInitial}
          onChange={handleChange}
          required
        />
        <Input
          name="address"
          placeholder="Pickup Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <Input
          name="pickupTime"
          type="time"
          placeholder="Desired Pickup Time"
          value={formData.pickupTime}
          onChange={handleChange}
        />
        <Input
          name="phone"
          placeholder="Phone Number (optional)"
          value={formData.phone}
          onChange={handleChange}
        />
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            required
          />
          <span className="text-sm">
            I agree to the “Beat the Clock – 60 Minute Challenge” terms
          </span>
        </label>
        <Button type="submit" className="w-full">
          Submit Ride Request
        </Button>
      </form>
    </div>
  );
}
