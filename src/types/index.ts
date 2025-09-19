// Core type definitions for the WoW Loading Screen Creator

export interface Zone {
  id: string;
  label: string;
  category: 'capital' | 'continent' | 'dungeon' | 'raid' | 'battleground' | 'other';
  filenames: ZoneFilename[];
  notes?: string;
}

export interface ZoneFilename {
  path: string;
  aspect: '4:3' | 'wide';
  required: boolean;
}

export interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  aspectRatio: '4:3' | 'wide' | 'both';
  previewUrl: string;
  fullUrl: string;
  tags: string[];
  license: 'free' | 'attribution' | 'custom';
  author?: string;
}

export interface Pack {
  id: string;
  name: string;
  description: string;
  version: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
  zones: PackZone[];
  settings: PackSettings;
  metadata: PackMetadata;
}

export interface PackZone {
  zoneId: string;
  variants: PackZoneVariant[];
}

export interface PackZoneVariant {
  aspect: '4:3' | 'wide';
  sourceType: 'upload' | 'template';
  sourceId?: string; // template ID if using template
  imageData?: string; // base64 or blob URL for uploaded images
  cropRect?: CropRect;
  textOverlay?: TextOverlay;
}

export interface CropRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface TextOverlay {
  text: string;
  position: 'top-left' | 'top-center' | 'top-right' | 'center' | 'bottom-left' | 'bottom-center' | 'bottom-right';
  fontSize: number;
  color: string;
  fontFamily: string;
  shadow: boolean;
  opacity: number;
}

export interface PackSettings {
  exportFormat: 'mpq' | 'folder';
  compression: 'none' | 'low' | 'medium' | 'high';
  includeReadme: boolean;
  generateChecksum: boolean;
}

export interface PackMetadata {
  tags: string[];
  isPublic: boolean;
  githubUrl?: string;
  downloadCount: number;
  stars: number;
  license: string;
}