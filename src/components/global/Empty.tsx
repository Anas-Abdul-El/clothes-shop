import { Button } from "@/components/ui/button"
import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from "@/components/ui/empty"
import { File } from "lucide-react"
import { redirect } from "next/navigation"

export default function EmptyWrapper() {
    return (
        <Empty>
            <EmptyHeader>
                <EmptyMedia variant="icon">
                    <File />
                </EmptyMedia>
                <EmptyTitle className=" capitalize">no dresses yet</EmptyTitle>
                <EmptyDescription>
                    There is no dresses yet, we will add it soon
                </EmptyDescription>
            </EmptyHeader>
            <EmptyContent className="flex-row justify-center gap-2">
                <Button onClick={() => redirect("/")}>Home</Button>
                <Button onClick={() => redirect("/shop")} variant="outline">All Collections</Button>
            </EmptyContent>
        </Empty>
    )
}
