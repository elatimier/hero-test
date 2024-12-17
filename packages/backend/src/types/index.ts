export interface User {
  id: string;
  email: string;
  name: string;
  profilePicture?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Activity {
  id: string;
  userId: string;
  type: 'RUN' | 'BIKE' | 'SWIM' | 'HIKE';
  startTime: Date;
  endTime: Date;
  distance: number; // in meters
  duration: number; // in seconds
  elevationGain: number; // in meters
  route: GeoJSON.LineString;
  createdAt: Date;
  updatedAt: Date;
}

export interface ActivityStats {
  totalDistance: number;
  totalDuration: number;
  totalElevationGain: number;
  activityCount: number;
}