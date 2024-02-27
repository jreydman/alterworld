import { TelegramLogo, PhoneCall } from "@phosphor-icons/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import { redirect } from "react-router-dom"
import { Button } from "../../ui/button"

export default function ProfileCard({ className }: { className?: string }): JSX.Element {
    return (
        <Card className={`bg-black bg-opacity-25 ${className}`}>
            <CardHeader className="flex items-center">
                <img className="w-32 h-32 rounded-full" src="/src/assets/pictures/avatar.jpg" />
                <br/>
                <CardTitle className="text-secondary">Oleksandr Mavrynskyi</CardTitle>
                <CardDescription>Fullstack developer</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2">
                <Button variant="link" onClick={() => window.open('https://t.me/jreydman', '_blank')} onCopy={() => redirect("/")}><TelegramLogo />JReydman</Button>
                <Button variant="default"><PhoneCall />+380955804468</Button>
                <Button variant="outline">pikj.reyderman@gmail.com</Button>
            </CardContent>
        </Card>
    )
}