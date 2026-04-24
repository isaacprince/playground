import { publicUrl } from './utils/publicUrl';

describe('publicUrl', () => {
  it('encodes spaces for static asset paths', () => {
    expect(publicUrl('/images/Editorial /cover.png')).toContain('%20');
  });
});
