import toast from './toast';
import { ToastAndroid } from 'react-native';

// Mock the ToastAndroid.showWithGravity function
jest.mock('react-native', () => ({
  ToastAndroid: {
    showWithGravity: jest.fn(),
  },
}));

describe('toast function', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('calls ToastAndroid.showWithGravity with default parameters', () => {
    const message = 'Hello World!';
    toast(message);
    expect(ToastAndroid.showWithGravity).toHaveBeenCalledWith(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
  });

  it('calls ToastAndroid.showWithGravity with custom duration and position', () => {
    const message = 'Hello World!';
    toast(message, 'LONG', 'TOP');
    expect(ToastAndroid.showWithGravity).toHaveBeenCalledWith(
      message,
      ToastAndroid.LONG,
      ToastAndroid.TOP,
    );
  });
});