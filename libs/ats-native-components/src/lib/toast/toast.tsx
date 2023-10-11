import { ToastAndroid } from 'react-native';

export type DurationTypes = 'SHORT' | 'LONG'
export type PosotionTypes = 'TOP' | 'BOTTOM' | 'CENTER'

/**
 * Displays default device specific toast
 * 
 * @param message 
 * @param duration 
 * @param position 
 */
export function toast(message: string, duration:DurationTypes='SHORT', position:PosotionTypes='BOTTOM'):void {
  ToastAndroid.showWithGravity(message, ToastAndroid[duration], ToastAndroid[position]);
}

export default toast;
