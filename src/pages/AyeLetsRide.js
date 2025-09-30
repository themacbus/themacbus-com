import { useEffect } from "react";

export default function AyeLetsRide() {
  useEffect(() => {
    window.location.href = "https://pci.jotform.com/form/252710672217049";
  }, []);

  return (
    <div>
      <p>Redirecting to the ride form...</p>
    </div>
  );
}
