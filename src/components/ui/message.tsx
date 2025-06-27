"use client"

import * as React from "react"

import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

import ContactSection from "@/app/(web)/(home)/sections/contact"
import { Mail } from "lucide-react"
import { BorderBeam } from "./border-beam"

export function MessageButton() {
    const [open, setOpen] = React.useState(false)
    const isDesktop = useMediaQuery("(min-width: 568px)")

    if (isDesktop) {
        return (
            <>
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        <Button variant="secondary" size={'icon'} className="rounded-full size-12 p-2 animate-ripple" aria-label="Open message dialog">
                            <Mail className="size-5" />
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[525px] rounded-3xl p-0">
                        <DialogHeader className="hidden">
                            <DialogTitle>Get In Touch</DialogTitle>
                            <DialogDescription>
                                If you have any questions, project inquiries, or just want to say hello, feel free to reach out! I'm always open to discussing new opportunities and collaborations.
                            </DialogDescription>
                        </DialogHeader>
                        <ContactSection />
                        <BorderBeam
                            duration={6}
                            size={400}
                            className="from-transparent via-primary to-transparent"
                        />
                        <BorderBeam
                            duration={6}
                            delay={3}
                            size={400}
                            className="from-transparent via-pink-500 to-transparent"
                        />
                    </DialogContent>
                </Dialog>
            </>
        )
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button variant="secondary" size={'icon'} className="rounded-full size-10 p-2 animate-ripple" aria-label="Open message dialog">
                    <Mail className="size-5" />
                </Button>
            </DrawerTrigger>
            <DrawerContent className="rounded-3xl p-0">
                <DrawerHeader className="hidden">
                    <DrawerTitle>Get In Touch</DrawerTitle>
                    <DrawerDescription>
                        If you have any questions, project inquiries, or just want to say hello, feel free to reach out! I'm always open to discussing new opportunities and collaborations.
                    </DrawerDescription>
                </DrawerHeader>
                <ContactSection />
            </DrawerContent>
        </Drawer>
    )
}