import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import ConsiderCard from "./ConsiderCard";
import TeameightsCard from "./TeameightsCard";

export default function BannerSpin({ className }: { className?: string }) {
    return (
        <Carousel className={`${className}`}>
            <CarouselContent>
                <CarouselItem key={1}>
                    <TeameightsCard />
                </CarouselItem>
                <CarouselItem key={1}>
                    <ConsiderCard />
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}