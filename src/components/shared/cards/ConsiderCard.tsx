import { Card, CardContent } from "@/components/ui/card";

export default function ConsiderCard() {
    return (
        <Card className="bg-black bg-opacity-25">
            <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold">Consider</span>
            </CardContent>
        </Card>
    )
}