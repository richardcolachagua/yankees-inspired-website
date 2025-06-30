import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TeamHeroProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export default function TeamHero({
  image,
  title,
  description,
  buttonText,
  buttonLink,
}: TeamHeroProps) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 py-16 bg-gray-50">
      <Card className="md:w-1/2 mb-8 md:mb-0 bg-white shadow-lg">
        <CardContent className="p-8 flex flex-col justify-center h-full">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="mb-6">{description}</p>
          <div>
            <Button asChild>
              <a href={buttonLink}>{buttonText}</a>
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card className="md:w-1/2 flex justify-center items-center bg-white shadow-lg">
        <CardContent className="flex justify-center p-8">
          <Image
            src={image}
            alt={title}
            width={400}
            height={400}
            className="rounded-lg object-cover"
            priority
          />
        </CardContent>
      </Card>
    </section>
  );
}
