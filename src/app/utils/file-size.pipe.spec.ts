import { FileSizePipe } from './file-size.pipe';

describe('FileSizePipe', () => {
  it('create an instance', () => {
    const pipe = new FileSizePipe();
    expect(pipe).toBeTruthy();
  });

  it('should convert file size', () => {
    const pipe = new FileSizePipe();
    expect(pipe.transform(5)).toEqual('5.0 bytes');
    expect(pipe.transform(1024)).toEqual('1.0 KB');
    expect(pipe.transform(1500, 4)).toEqual('1.4648 KB');
  });
});
