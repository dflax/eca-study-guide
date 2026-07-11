import type { Unit } from '@/types/study';

export const unit03OwningAVehicle: Unit = {
  id: 'unit-03-owning-a-vehicle',
  number: 3,
  title: 'Owning a Vehicle — Registration, Title & Inspection',
  description: 'Registration and title basics, minimum liability insurance coverage, registration renewal, and inspection requirements.',
  notes: [
    {
      heading: 'Registration and Title',
      content: 'A registration allows a vehicle to be driven on public roads and highways. A title certificate proves who owns the vehicle. You must be at least 16 to register a vehicle (you can title a vehicle at any age). A new resident must get a NY registration within 30 days of establishing residence.',
    },
    {
      heading: 'Insurance Requirements',
      content: 'Your vehicle must be covered by liability insurance for as long as it is registered, even if you don\'t drive it. Minimum liability coverage required in New York:',
      bullets: [
        '$25,000 against injury to one person / $50,000 against injury to two or more persons',
        '$50,000 against the death of one person / $100,000 against the death of two or more persons',
        '$10,000 against property damage',
        'If your vehicle is uninsured for 90+ days (and plates aren\'t turned in), your driver license will also be suspended',
      ],
    },
    {
      heading: 'Registration Renewal',
      content: 'Most registrations are renewed every two years, based on vehicle weight (for vehicles up to 18,000 lbs). You should receive a renewal reminder in the mail about 45 to 60 days before expiration — but you are responsible for renewing on time even without a reminder. If the expiration date falls on a weekend or legal holiday, the registration is automatically extended to midnight of the next business day (insurance must still be maintained).',
    },
    {
      heading: 'Vehicle Inspection',
      content: 'Most vehicles sold in NY must be inspected within 30 days of the date of transfer/sale, with a certificate of inspection before delivery. If you buy from someone who is not a NYS dealer, you must have the vehicle inspected within 10 days after you register it. After the first inspection, the vehicle must be re-inspected annually before the current certificate expires (also required on change of registrant). Tires must have at least 2/32 of an inch of tread.',
    },
  ],
  flashcards: [
    { id: 'unit-03-owning-a-vehicle-fc-01', front: 'What is the difference between a vehicle registration and a title certificate?', back: 'A registration allows a vehicle to be driven on public roads. A title certificate proves who owns the vehicle.' },
    { id: 'unit-03-owning-a-vehicle-fc-02', front: 'What is the minimum age to register a vehicle in New York?', back: '16 years old. (You can title a vehicle at any age.)' },
    { id: 'unit-03-owning-a-vehicle-fc-03', front: 'What is the minimum liability insurance coverage for injury to one person? To two or more?', back: '$25,000 for injury to one person; $50,000 for injury to two or more persons.' },
    { id: 'unit-03-owning-a-vehicle-fc-04', front: 'What is the minimum liability insurance coverage for the death of one person? Of two or more?', back: '$50,000 for the death of one person; $100,000 for the death of two or more persons.' },
    { id: 'unit-03-owning-a-vehicle-fc-05', front: 'What is the minimum liability coverage required for property damage?', back: '$10,000.' },
    { id: 'unit-03-owning-a-vehicle-fc-06', front: 'Must you maintain liability insurance on a registered vehicle even if you never drive it?', back: 'Yes — insurance is required for as long as the vehicle is registered, whether or not it is driven.' },
    { id: 'unit-03-owning-a-vehicle-fc-07', front: 'How often are most vehicle registrations renewed?', back: 'Every two years (for vehicles with a maximum gross weight of 18,000 lbs or less), with fees based on vehicle weight.' },
    { id: 'unit-03-owning-a-vehicle-fc-08', front: 'If you buy a used vehicle from a private seller (not a NYS dealer), when must you have it inspected?', back: 'Within 10 days after you register it.' },
    { id: 'unit-03-owning-a-vehicle-fc-09', front: 'What is the minimum legal tire tread depth?', back: '2/32 of an inch.' },
    { id: 'unit-03-owning-a-vehicle-fc-10', front: 'If your vehicle registration expires on a Sunday, what happens?', back: 'It is automatically extended to midnight of the next business day — but you must still maintain liability insurance during the extension.' },
    { id: 'unit-03-owning-a-vehicle-fc-11', front: 'What happens to your driver license if your vehicle is uninsured for 90+ days and you don\'t turn in the plates?', back: 'Your driver license will also be suspended.' },
  ],
  quiz: [
    { id: 'unit-03-owning-a-vehicle-q-01', question: 'What document proves who owns a vehicle?', options: ['The registration', 'The inspection certificate', 'The title certificate', 'The insurance card'], correctIndex: 2, explanation: 'A title certificate proves ownership. A registration is what allows the vehicle to be driven on public roads.' },
    { id: 'unit-03-owning-a-vehicle-q-02', question: 'What is the minimum age to register a vehicle in New York State?', options: ['14', '16', '18', '21'], correctIndex: 1, explanation: 'You must be at least 16 to register a vehicle, though you can title a vehicle at any age.' },
    { id: 'unit-03-owning-a-vehicle-q-03', question: 'What is the minimum required liability coverage for injury to two or more people in one crash?', options: ['$10,000', '$25,000', '$50,000', '$100,000'], correctIndex: 2, explanation: 'Minimum coverage requires $50,000 against injury to two or more persons in one incident.' },
    { id: 'unit-03-owning-a-vehicle-q-04', question: 'What is the minimum required liability coverage for property damage?', options: ['$10,000', '$25,000', '$50,000', '$100,000'], correctIndex: 0, explanation: 'The minimum required property damage coverage is $10,000.' },
    { id: 'unit-03-owning-a-vehicle-q-05', question: 'How often must most passenger vehicle registrations be renewed?', options: ['Every year', 'Every two years', 'Every three years', 'Every five years'], correctIndex: 1, explanation: 'Most registrations for vehicles up to 18,000 lbs are valid for two years.' },
    { id: 'unit-03-owning-a-vehicle-q-06', question: 'You buy a used car from a private seller. Within how many days of registering it must you have it inspected?', options: ['5 days', '10 days', '30 days', '60 days'], correctIndex: 1, explanation: 'When buying from someone other than a NYS dealer, you must have the vehicle inspected within 10 days of registering it.' },
    { id: 'unit-03-owning-a-vehicle-q-07', question: 'What is the minimum legal tread depth for a passenger vehicle tire?', options: ['1/32 of an inch', '2/32 of an inch', '4/32 of an inch', '6/32 of an inch'], correctIndex: 1, explanation: 'New York law requires at least 2/32 of an inch of tire tread.' },
    { id: 'unit-03-owning-a-vehicle-q-08', question: 'Must you maintain liability insurance on a vehicle that is registered but currently not being driven?', options: ['No, only while actively driving it', 'Yes, insurance is required as long as it is registered', 'Only if it is less than 5 years old', 'Only if it is parked on a public street'], correctIndex: 1, explanation: 'A registered vehicle must be covered by liability insurance the entire time it is registered, even if it is not being driven.' },
    { id: 'unit-03-owning-a-vehicle-q-09', question: 'If your vehicle is uninsured for 90 days and you did not turn in the plates, what happens?', options: ['Nothing, as long as the vehicle is parked', 'Only a warning letter is sent', 'Your driver license will also be suspended', 'The registration is automatically renewed'], correctIndex: 2, explanation: 'Beyond registration suspension, your driver license will also be suspended if the vehicle remains uninsured for 90 days and the plates were not returned.' },
    { id: 'unit-03-owning-a-vehicle-q-10', question: 'How far in advance of expiration should you typically receive a registration renewal reminder?', options: ['5–10 days', '45–60 days', '6 months', '1 year'], correctIndex: 1, explanation: 'You should receive a renewal reminder approximately 45 to 60 days before your registration expires, but you are responsible for renewing on time regardless.' },
  ],
};
