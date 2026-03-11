"use client"
import { Button } from "@/components/ui/button"
import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from "@/components/ui/empty"
import { Spinner } from "@/components/ui/spinner"
import { redirect } from "next/navigation"

export function Loading() {
    return (
        <Empty className="w-screen h-screen flex justify-center items-center">
            <EmptyHeader>
                <EmptyMedia variant="icon">
                    <Spinner />
                </EmptyMedia>
                <EmptyTitle>Processing your request</EmptyTitle>
                <EmptyDescription>
                    Please wait while we process your request. Do not refresh the page.
                </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
                <Button variant="outline" size="sm" onClick={() => redirect("/")}>
                    Cancel
                </Button>
            </EmptyContent>
        </Empty>
    )
}
