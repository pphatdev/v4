/**
 * Hooks api for managing projects.
 *
 * @source https://api.sophat.top/api/v1/projects
 */

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Project } from '@/lib/interfaces/projects';
export const useProjects = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchProjects = async () => {
        try {
            setLoading(true);
            const response = await axios.get('https://api.sophat.top/api/v1/projects', {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setProjects(response.data);
            setError(null);
        } catch (err) {
            setError('Failed to fetch projects');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    return { projects, loading, error, refetch: fetchProjects };
};