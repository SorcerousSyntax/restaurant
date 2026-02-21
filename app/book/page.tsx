import { BookingForm } from '@/components/shared/booking-form';

export default function BookPage() {
  return (
    <section className="space-y-4">
      <h1 className="font-serif text-4xl">Reserve Your Table</h1>
      <p>Elegant evenings are in high demand. Reserve now.</p>
      <BookingForm />
    </section>
  );
}
