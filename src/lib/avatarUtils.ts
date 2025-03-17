/**
 * Generate an avatar placeholder URL with initials
 * @param name - The person's name
 * @param bgColor - Background color (optional, default is 'blue')
 * @param textColor - Text color (optional, default is 'white')
 * @param size - Image size in pixels (optional, default is 128)
 * @returns URL for an avatar placeholder image
 */
export function getAvatarPlaceholder(
  name: string,
  bgColor: string = '0D88E1',
  textColor: string = 'FFFFFF',
  size: number = 128
): string {
  // Extract initials from the name (max 2 characters)
  const initials = name
    .split(' ')
    .map(part => part.charAt(0))
    .join('')
    .toUpperCase()
    .substring(0, 2);

  // Create a UI Avatars URL
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&background=${bgColor}&color=${textColor}&size=${size}&bold=true`;
}

/**
 * Generate a random avatar URL from DiceBear
 * @param seed - A seed string (like a user ID or name)
 * @param style - The avatar style (optional, default is 'personas')
 * @param size - Image size in pixels (optional, default is 128)
 * @returns URL for a random avatar image
 */
export function getRandomAvatar(
  seed: string,
  style: string = 'personas',
  size: number = 128
): string {
  return `https://api.dicebear.com/7.x/${style}/svg?seed=${encodeURIComponent(seed)}&size=${size}`;
} 