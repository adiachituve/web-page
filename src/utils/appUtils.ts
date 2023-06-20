import { config } from '../config';

export function isBreakpointActive(breakpoint: number): boolean {
  return window.innerWidth > breakpoint;
}

export function isDesktopApp(): boolean {
  return isBreakpointActive(config.desktopAppWidth);
}

export function isMobileApp(): boolean {
  return !isDesktopApp();
}
