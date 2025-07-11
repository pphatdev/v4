import { useState, useEffect } from 'react';
import axios from 'axios';
import { Project } from '@/lib/interfaces/projects';
import { NEXT_PUBLIC_API_URL } from '@/lib/constant';
export const useProjects = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchProjects = async () => {
        try {
            setLoading(true);
            const response = await axios.get('/api/v1/projects', {
                baseURL: NEXT_PUBLIC_API_URL,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setProjects(response.data.result);
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