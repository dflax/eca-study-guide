import type { Course } from '@/types/study';
import { unit01DriverLicenses } from './units/unit-01-driver-licenses';
import { unit02KeepingYourLicense } from './units/unit-02-keeping-your-license';
import { unit03OwningAVehicle } from './units/unit-03-owning-a-vehicle';
import { unit04TrafficControl } from './units/unit-04-traffic-control';
import { unit05IntersectionsTurns } from './units/unit-05-intersections-turns';
import { unit06PassingSchoolBuses } from './units/unit-06-passing-school-buses';
import { unit07Parking } from './units/unit-07-parking';
import { unit08DefensiveDriving } from './units/unit-08-defensive-driving';
import { unit09AlcoholDrugs } from './units/unit-09-alcohol-drugs';
import { unit10SpecialConditions } from './units/unit-10-special-conditions';
import { unit11SharingTheRoad } from './units/unit-11-sharing-the-road';
import { unit12CrashesAndTechnology } from './units/unit-12-crashes-and-technology';

export const nyDriversPermit: Course = {
  id: 'ny-drivers-permit',
  displayName: "NY State Driver's Permit Test Prep",
  year: 'general',
  category: 'general',
  subject: "NY State Driver's Permit Test Prep",
  teacher: 'Self-Study',
  school: "Based on the Official NY DMV Driver's Manual",
  description: 'Complete exam prep for the New York State Learner Permit written test: traffic laws, signs and signals, right-of-way, defensive driving, and alcohol and drug laws, drawn directly from the official NY DMV Driver\'s Manual.',
  color: 'sky',
  units: [
    unit01DriverLicenses,
    unit02KeepingYourLicense,
    unit03OwningAVehicle,
    unit04TrafficControl,
    unit05IntersectionsTurns,
    unit06PassingSchoolBuses,
    unit07Parking,
    unit08DefensiveDriving,
    unit09AlcoholDrugs,
    unit10SpecialConditions,
    unit11SharingTheRoad,
    unit12CrashesAndTechnology,
  ],
};
