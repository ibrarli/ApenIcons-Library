import { 
  Home, HamburgerMenu, Kebab, KebabMenu, ArrowDown, ArrowRight, ArrowUp,
  Check, Star, Mail, List,
  User, UserCheck,
  Plus, Minus,
  Dot, Triangle, Square, SquareOutline, SquareDotted,
  // v1.0.2 Imports
  ArrowLeft, CircleCross, CircleMinus, CirclePlus, CircleStar,
  Cross, EmojiHappy, Eye, EyeScan, Italic,
  Joystick, Joystick2, Lock, Mails, MapPin,
  Moon, Scan, ScanSearch, Search, Sun,
  Hd, Mic, Monitor, Pause, Play, Video, Wifi,        // Media & Hardware
  PieChart, Refresh, Settings,                      // Data & System
  Folder, Bookmark, Clipboard,                      // Files & Productivity
  Brush, PaintRoller, Crop, Bold,                   // Design & Text
  Bug, Bolt, Ring                                   // Development & Objects
} from '../../src'; 

export const ALL_ICONS = [
  // Core & Navigation (v1.0.1)
  { name: 'Home', component: Home, tags: ['main', 'house'], version: "v1.0.1", category: "Navigation" },
  { name: 'HamburgerMenu', component: HamburgerMenu, tags: ['nav', 'menu', 'bars'], version: "v1.0.1", category: "Navigation" },
  { name: 'Kebab', component: Kebab, tags: ['dots', 'more', 'vertical'], version: "v1.0.1", category: "Navigation" },
  { name: 'KebabMenu', component: KebabMenu, tags: ['dots', 'more', 'horizontal'], version: "v1.0.1", category: "Navigation" },
  { name: 'ArrowDown', component: ArrowDown, tags: ['direction', 'bottom'], version: "v1.0.1", category: "Navigation" },
  { name: 'ArrowRight', component: ArrowRight, tags: ['direction', 'next'], version: "v1.0.1", category: "Navigation" },
  { name: 'ArrowUp', component: ArrowUp, tags: ['direction', 'top'], version: "v1.0.1", category: "Navigation" },

  // Actions & Feedback (v1.0.1)
  { name: 'Check', component: Check, tags: ['done', 'success', 'tick'], version: "v1.0.1", category: "Actions" },
  { name: 'Star', component: Star, tags: ['favorite', 'rating', 'score'], version: "v1.0.1", category: "Actions" },
  { name: 'Mail', component: Mail, tags: ['email', 'envelope'], version: "v1.0.1", category: "Actions" },
  { name: 'List', component: List, tags: ['bullets', 'tasks', 'todo'], version: "v1.0.1", category: "Actions" },

  // User & Profile (v1.0.1)
  { name: 'User', component: User, tags: ['profile', 'account', 'person'], version: "v1.0.1", category: "User" },
  { name: 'UserCheck', component: UserCheck, tags: ['verified', 'authorized'], version: "v1.0.1", category: "User" },

  // Math & Controls (v1.0.1)
  { name: 'Plus', component: Plus, tags: ['add', 'new', 'increment'], version: "v1.0.1", category: "Math" },
  { name: 'Minus', component: Minus, tags: ['remove', 'decrement'], version: "v1.0.1", category: "Math" },

  // Geometric Shapes (v1.0.1)
  { name: 'Dot', component: Dot, tags: ['circle', 'point'], version: "v1.0.1", category: "Shapes" },
  { name: 'Triangle', component: Triangle, tags: ['shape', 'delta'], version: "v1.0.1", category: "Shapes" },
  { name: 'Square', component: Square, tags: ['filled', 'box'], version: "v1.0.1", category: "Shapes" },
  { name: 'SquareOutline', component: SquareOutline, tags: ['frame', 'border'], version: "v1.0.1", category: "Shapes" },
  { name: 'SquareDotted', component: SquareDotted, tags: ['placeholder', 'dashed'], version: "v1.0.1", category: "Shapes" },

  // v1.0.2 Additions
  { name: 'ArrowLeft', component: ArrowLeft, tags: ['direction', 'back', 'previous'], version: "v1.0.2", category: "Navigation" },
  { name: 'CircleCross', component: CircleCross, tags: ['cancel', 'close', 'error'], version: "v1.0.2", category: "Actions" },
  { name: 'CircleMinus', component: CircleMinus, tags: ['remove', 'decrement', 'circle'], version: "v1.0.2", category: "Math" },
  { name: 'CirclePlus', component: CirclePlus, tags: ['add', 'increment', 'circle'], version: "v1.0.2", category: "Math" },
  { name: 'CircleStar', component: CircleStar, tags: ['favorite', 'rating', 'circle'], version: "v1.0.2", category: "Actions" },
  { name: 'Cross', component: Cross, tags: ['close', 'delete', 'remove'], version: "v1.0.2", category: "Actions" },
  { name: 'EmojiHappy', component: EmojiHappy, tags: ['smile', 'face', 'success'], version: "v1.0.2", category: "Actions" },
  { name: 'Eye', component: Eye, tags: ['view', 'show', 'visibility'], version: "v1.0.2", category: "Actions" },
  { name: 'EyeScan', component: EyeScan, tags: ['security', 'biometric', 'scan'], version: "v1.0.2", category: "Security" },
  { name: 'Italic', component: Italic, tags: ['text', 'style', 'editor'], version: "v1.0.2", category: "Design" },
  { name: 'Joystick', component: Joystick, tags: ['game', 'directional', 'input'], version: "v1.0.2", category: "Hardware" },
  { name: 'Joystick2', component: Joystick2, tags: ['game', 'controller', 'analog'], version: "v1.0.2", category: "Hardware" },
  { name: 'Lock', component: Lock, tags: ['security', 'private', 'closed'], version: "v1.0.2", category: "Security" },
  { name: 'Mails', component: Mails, tags: ['inbox', 'stack', 'messages'], version: "v1.0.2", category: "Actions" },
  { name: 'MapPin', component: MapPin, tags: ['location', 'marker', 'address'], version: "v1.0.2", category: "Navigation" },
  { name: 'Moon', component: Moon, tags: ['dark-mode', 'night', 'crescent'], version: "v1.0.2", category: "Design" },
  { name: 'Scan', component: Scan, tags: ['camera', 'frame', 'qr'], version: "v1.0.2", category: "Security" },
  { name: 'ScanSearch', component: ScanSearch, tags: ['visual-search', 'ai', 'camera'], version: "v1.0.2", category: "Security" },
  { name: 'Search', component: Search, tags: ['find', 'lookup', 'magnifier'], version: "v1.0.2", category: "Actions" },
  { name: 'Sun', component: Sun, tags: ['light-mode', 'day', 'weather'], version: "v1.0.2", category: "Design" },

  // Media & Hardware (v1.0.3)
  { name: 'Hd', component: Hd, tags: ['video', 'quality', 'high-definition'], version: "v1.0.3", category: "Media" },
  { name: 'Mic', component: Mic, tags: ['audio', 'record', 'voice', 'microphone'], version: "v1.0.3", category: "Hardware" },
  { name: 'Monitor', component: Monitor, tags: ['screen', 'display', 'computer', 'desktop'], version: "v1.0.3", category: "Hardware" },
  { name: 'Pause', component: Pause, tags: ['media', 'stop', 'control', 'wait'], version: "v1.0.3", category: "Media" },
  { name: 'Play', component: Play, tags: ['media', 'start', 'control', 'action'], version: "v1.0.3", category: "Media" },
  { name: 'Video', component: Video, tags: ['camera', 'movie', 'record', 'media'], version: "v1.0.3", category: "Media" },
  { name: 'Wifi', component: Wifi, tags: ['network', 'internet', 'connection', 'signal'], version: "v1.0.3", category: "Hardware" },

  // Data & System (v1.0.3)
  { name: 'PieChart', component: PieChart, tags: ['data', 'analytics', 'stats', 'graph'], version: "v1.0.3", category: "Data" },
  { name: 'Refresh', component: Refresh, tags: ['reload', 'update', 'sync', 'rotate'], version: "v1.0.3", category: "Actions" },
  { name: 'Settings', component: Settings, tags: ['config', 'options', 'gear', 'preferences'], version: "v1.0.3", category: "Data" },

  // Files & Productivity (v1.0.3)
  { name: 'Folder', component: Folder, tags: ['directory', 'files', 'storage', 'save'], version: "v1.0.3", category: "Productivity" },
  { name: 'Bookmark', component: Bookmark, tags: ['save', 'favorite', 'ribbon', 'read-later'], version: "v1.0.3", category: "Productivity" },
  { name: 'Clipboard', component: Clipboard, tags: ['copy', 'paste', 'tasks', 'notes'], version: "v1.0.3", category: "Productivity" },

  // Design & Editing (v1.0.3)
  { name: 'Brush', component: Brush, tags: ['paint', 'draw', 'art', 'style'], version: "v1.0.3", category: "Design" },
  { name: 'PaintRoller', component: PaintRoller, tags: ['fill', 'theme', 'appearance', 'color'], version: "v1.0.3", category: "Design" },
  { name: 'Crop', component: Crop, tags: ['edit', 'image', 'resize', 'frame'], version: "v1.0.3", category: "Design" },
  { name: 'Bold', component: Bold, tags: ['text', 'style', 'editor', 'weight'], version: "v1.0.3", category: "Design" },

  // Development & Objects (v1.0.3)
  { name: 'Bug', component: Bug, tags: ['debug', 'error', 'code', 'issue'], version: "v1.0.3", category: "Development" },
  { name: 'Bolt', component: Bolt, tags: ['flash', 'energy', 'power', 'fast'], version: "v1.0.3", category: "Development" },
  { name: 'Ring', component: Ring, tags: ['premium', 'jewelry', 'marriage', 'engagement'], version: "v1.0.3", category: "Objects" },
];