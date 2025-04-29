
import { BloodMarker, BloodTestResult } from './types';
import { bloodMarkers } from './bloodTestUtils';

// Get all blood markers
export const getBloodMarkers = async (): Promise<BloodMarker[]> => {
  // In a real app, this would fetch from an API
  return bloodMarkers;
};

// Add a new timeline entry
export const addTimelineEntry = async (data: { 
  userId: string; 
  date: Date; 
  results: BloodTestResult[] 
}): Promise<void> => {
  // In a real app, this would send data to a backend API
  console.log('Adding timeline entry:', data);
  
  // For now, let's store in localStorage
  const timelineKey = `bloodtest_timeline_${data.userId}`;
  const existingData = localStorage.getItem(timelineKey);
  const timeline = existingData ? JSON.parse(existingData) : [];
  
  timeline.push({
    id: `entry-${Date.now()}`,
    date: data.date.toISOString(),
    results: data.results
  });
  
  localStorage.setItem(timelineKey, JSON.stringify(timeline));
};

// Update an existing timeline entry
export const updateTimelineEntry = async (data: { 
  userId: string; 
  date: Date; 
  results: BloodTestResult[] 
}): Promise<void> => {
  // In a real app, this would send data to a backend API
  console.log('Updating timeline entry:', data);
  
  // For now, we'll update the entry with the matching date in localStorage
  const timelineKey = `bloodtest_timeline_${data.userId}`;
  const existingData = localStorage.getItem(timelineKey);
  if (!existingData) return;
  
  const timeline = JSON.parse(existingData);
  const dateStr = data.date.toISOString();
  
  const updatedTimeline = timeline.map((entry: any) => {
    // Find the entry with the matching date and update its results
    if (new Date(entry.date).toDateString() === new Date(dateStr).toDateString()) {
      return {
        ...entry,
        results: data.results
      };
    }
    return entry;
  });
  
  localStorage.setItem(timelineKey, JSON.stringify(updatedTimeline));
};
