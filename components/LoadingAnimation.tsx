import React, { useEffect, useState } from "react";
import Rive, { useRive } from "@rive-app/react-canvas";

const LoadingAnimation: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const { RiveComponent } = useRive({
    src: "loader_icon.riv",
    stateMachines: "Demo",
    autoplay: false, // Set autoplay to false initially
    onLoadError: (error) => console.log("error", error),
    onLoad: () => {
      console.log("load");
      setIsLoading(false);
    },
  });

  useEffect(() => {
    if (!isLoading && !animationPlayed && RiveComponent) {
      // Get the rive instance from the RiveComponent
      const riveInstance = RiveComponent.current?.rive;

      if (riveInstance) {
        // Play the 'Demo' state machine
        riveInstance.play("Demo");
        setAnimationPlayed(true);
      }
    }
  }, [isLoading, animationPlayed, RiveComponent]);

  return (
    <div>
      {isLoading ? (
        // Render a loading indicator if needed
        <div>Loading...</div>
      ) : (
        <div>
          {/* Render Rive animation */}
          {RiveComponent && <Rive component={RiveComponent} />}
        </div>
      )}
    </div>
  );
};

export default LoadingAnimation;
