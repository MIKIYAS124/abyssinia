import { create } from 'zustand';

interface CourseState {
    selectedCourse: string;
    selectCourse: (course: string) => void;
}

export const useCourseStore = create<CourseState>((set) => ({
    selectedCourse: 'none',
    selectCourse: (course) => set({ selectedCourse: course }),
}));
