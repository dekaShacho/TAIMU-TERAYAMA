import { LucideIcon, Package, User, Users, LineChart, GraduationCap } from 'lucide-react';

export interface Guest {
  id: number;
  name: string;
  role: string;
  roleColor: string;
  roleBg: string;
  image: string;
  description: string;
  icon: LucideIcon;
}

export const GUESTS: Guest[] = [
  {
    id: 1,
    name: "Aさん",
    role: "EC × 業務改善",
    roleColor: "text-orange-500",
    roleBg: "bg-orange-50",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    description: "在庫管理の悩みをLarkで解決したら、お店の売上が自然と伸びました。バックオフィスの整理が攻めの経営に繋がることを実感しています。",
    icon: Package
  },
  {
    id: 2,
    name: "Bさん",
    role: "フリーランス",
    roleColor: "text-blue-500",
    roleBg: "bg-blue-50",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop",
    description: "未経験からLark構築を始めました。お客様と一緒に業務フローを考える時間が何より楽しい。感謝されながら報酬をいただける最高の仕事です。",
    icon: User
  },
  {
    id: 3,
    name: "Cさん",
    role: "コミュニティ",
    roleColor: "text-purple-500",
    roleBg: "bg-purple-50",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    description: "人が集まる場所をLarkで管理。事務作業を自動化して、コミュニケーションの質を高めることに注力できました。",
    icon: Users
  },
  {
    id: 4,
    name: "Dさん",
    role: "営業DX",
    roleColor: "text-green-500",
    roleBg: "bg-green-50",
    image: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop",
    description: "営業マンが入力したくないSFAを卒業。LarkならスマホからLINE感覚で報告完了。現場が喜ぶDXの形を見つけました。",
    icon: LineChart
  },
  {
    id: 5,
    name: "Eさん",
    role: "スクール運営",
    roleColor: "text-pink-500",
    roleBg: "bg-pink-50",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    description: "保護者との連絡も生徒管理もLark一つで。空いた時間で教育の質を高めることに集中できています。",
    icon: GraduationCap
  }
];

export const MAIN_IMAGE = "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop";
export const TIME_IMAGE = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop";
