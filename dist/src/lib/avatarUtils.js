"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAvatarPlaceholder = getAvatarPlaceholder;
exports.getRandomAvatar = getRandomAvatar;
/**
 * Generate an avatar placeholder URL with initials
 * @param name - The person's name
 * @param bgColor - Background color (optional, default is 'blue')
 * @param textColor - Text color (optional, default is 'white')
 * @param size - Image size in pixels (optional, default is 128)
 * @returns URL for an avatar placeholder image
 */
function getAvatarPlaceholder(name, bgColor, textColor, size) {
    if (bgColor === void 0) { bgColor = '0D88E1'; }
    if (textColor === void 0) { textColor = 'FFFFFF'; }
    if (size === void 0) { size = 128; }
    // Extract initials from the name (max 2 characters)
    var initials = name
        .split(' ')
        .map(function (part) { return part.charAt(0); })
        .join('')
        .toUpperCase()
        .substring(0, 2);
    // Create a UI Avatars URL
    return "https://ui-avatars.com/api/?name=".concat(encodeURIComponent(initials), "&background=").concat(bgColor, "&color=").concat(textColor, "&size=").concat(size, "&bold=true");
}
/**
 * Generate a random avatar URL from DiceBear
 * @param seed - A seed string (like a user ID or name)
 * @param style - The avatar style (optional, default is 'personas')
 * @param size - Image size in pixels (optional, default is 128)
 * @returns URL for a random avatar image
 */
function getRandomAvatar(seed, style, size) {
    if (style === void 0) { style = 'personas'; }
    if (size === void 0) { size = 128; }
    return "https://api.dicebear.com/7.x/".concat(style, "/svg?seed=").concat(encodeURIComponent(seed), "&size=").concat(size);
}
