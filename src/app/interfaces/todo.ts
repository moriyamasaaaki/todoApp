import { firestore } from 'firebase';

export interface Todo {
  userId: string;
  id: string;
  title: string;
  createdAt: firestore.Timestamp;
  category: '仕事' | 'プライベート' | 'その他';
  content: string;
}
