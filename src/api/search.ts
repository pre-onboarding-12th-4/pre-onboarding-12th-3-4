import { Sick } from '../types';
import http from './http';

export function search(query: string): Promise<Sick[]> {
  return http.request({ method: 'GET', url: '/sick', query: { q: query } });
}
