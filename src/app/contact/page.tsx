'use client'

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import toast, { Toaster } from 'react-hot-toast'

import {
  Form, FormField, FormItem, FormLabel,
  FormControl, FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Loader2 } from 'lucide-react'

// Zod schema
const ContactSchema = z.object({
  name: z.string().min(2, 'At least 2 characters'),
  email: z.string().email('Invalid email'),
  message: z.string().min(10, 'Minimum 10 characters'),
})

type ContactFormData = z.infer<typeof ContactSchema>

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)

  const form = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const onSubmit = async () => {
    if (!formRef.current) return

    setLoading(true)

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      toast.success(`Message sent successfully! 🚀`)
      form.reset()
    } catch {
      toast.error('Failed to send. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className=" min-h-screen  w-full bg-purple-500 dark:bg-background text-white dark:text-purple-300 px-6 py-20 flex items-center justify-center">
      <Toaster position="top-center" toastOptions={{ duration: 2000 }} />

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Contact Form */}
        <div className="w-full">
          <h2 className="text-4xl font-extrabold mb-4 text-center lg:text-left">Contact Me</h2>
          <p className="mb-8 text-center lg:text-left text-purple-100 dark:text-purple-400">
            Let’s connect! I usually respond within a few hours.
          </p>

          <Form {...form}>
            <form
              ref={formRef}
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 "
            >
              <FormField name="name" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Your Name" className=' bg-white text-black' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField name="email" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="you@example.com" className=' bg-white text-black'/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField name="message" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea {...field} rows={5} placeholder="What would you like to say?" className=' bg-white text-black' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <Button
                type="submit"
                className="w-full bg-white dark:bg-purple-500 text-purple-600 dark:text-white hover:scale-95 transition-transform"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="animate-spin h-4 w-4" />
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </Form>
        </div>

        {/* Google Map */}
        <div className="w-full h-96 lg:h-full rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14393.356137883125!2d85.1067803037594!3d25.5936480416968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed581270368427%3A0xe526d92f4bacc843!2sGardanibagh%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1749750478164!5m2!1sen!2sin"
          />
        </div>
      </div>
    </section>
  )
}
