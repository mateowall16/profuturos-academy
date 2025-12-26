import { Play, CheckCircle } from "lucide-react";
import { useState } from "react";

interface IntroVideoProps {
  onWatched: () => void;
  isWatched: boolean;
}

const IntroVideo = ({ onWatched, isWatched }: IntroVideoProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };
 
  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden mb-8">
      <div className="p-4 md:p-6 border-b border-border flex items-center justify-between">
        <div>
          <h2 className="font-semibold text-lg flex items-center gap-2">
            {isWatched && <CheckCircle className="w-5 h-5 text-primary" />}
            Vídeo de Boas-Vindas
          </h2>
          <p className="text-sm text-muted-foreground">
            Entenda como funciona a mentoria em 3 minutos
          </p>
        </div>
        {isWatched && (
          <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full font-medium">
            Assistido
          </span>
        )}
      </div>
      
      <div className="aspect-video bg-secondary relative">
        {!isPlaying ? (
          <div 
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center cursor-pointer group"
          >
            {/* Thumbnail */}
            <img 
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200"
              alt="Vídeo de boas-vindas"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-background/60 group-hover:bg-background/50 transition-colors" />
            {/* Play button */}
            <div className="relative z-10 w-20 h-20 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-button">
              <Play className="w-8 h-8 text-primary-foreground ml-1" />
            </div>
          </div>
        ) : (
          <iframe
            src="https://drive.google.com/file/d/1ANxz2tgNhdM3hNxW9l_0EdEPeDhHPp5I/preview"
            className="w-full h-full"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Vídeo de Boas-Vindas"
            onLoad={() => {
              if (!isWatched) {
                // Mark as watched after 5 seconds
                setTimeout(() => onWatched(), 5000);
              }
            }}
          />
        )}
      </div>
    </div>
  );
};

export default IntroVideo;