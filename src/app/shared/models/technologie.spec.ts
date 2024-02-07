import { Kategorie } from "../enums/kategorie";
import { Ring } from "../enums/ring";
import { Technologie } from "./technologie";

describe('Technologie', () => {
  it('should create an instance', () => {
    expect(new Technologie(
        'Angular',
        Kategorie.LanguagesFrameworks,
        Ring.Hold,
        'Angular ist eine Frontend Technologie.',
        'Angular ist bei Hold eingeordnet, weil es eine gute Technologie ist.'
    )).toBeTruthy();
  });
});
