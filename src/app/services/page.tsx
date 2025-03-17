import { redirect } from 'next/navigation';

export default function ServicesRedirect() {
  redirect('/services-list');
  return null; // This line will never be reached due to the redirect
} 