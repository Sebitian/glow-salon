export default function ContactMap() {
  return (
    <div className="rounded-lg overflow-hidden shadow-md h-[400px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.8254234567!2d-87.9528!3d42.2737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fcc5e12345678%3A0x1234567890abcdef!2s297%20Peterson%20Rd%2C%20Libertyville%2C%20IL%2060048%2C%20USA!5e0!3m2!1sen!2sus!4v1640123456789!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Venegas Salon & Spa Location"
      />
    </div>
  )
}
