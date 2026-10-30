import { describe, expect, it } from 'vitest';
import { GOOGLE_BUSINESS_PROFILE_URL } from './business-profile';
import { generateLocalBusinessSchema, generateOrganizationSchema } from './structured-data';

describe('FEIGRO Google business profile', () => {
  it('identifies the listing supplied by the owner', () => {
    expect(GOOGLE_BUSINESS_PROFILE_URL).toContain('0x9bc94068b7eadab:0x71901b1d16ad7592');
  });
  it('links both company schemas to the supplied listing', () => {
    const url = 'https://www.google.com/maps/place//data=!4m3!3m2!1s0x9bc94068b7eadab:0x71901b1d16ad7592!12e1?source=g.page.m.nd._&laa=nmx-reviews-dialog';
    expect(generateOrganizationSchema().sameAs).toEqual([url]);
    expect(generateLocalBusinessSchema().sameAs).toEqual([url]);
  });
});