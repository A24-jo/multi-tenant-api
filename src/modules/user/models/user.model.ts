
export interface User{
    user_id?: number;
    tenant_id: string;
    username: string;
    password_hash: string;
    email: string;
    role: string;
    created_at?: string | Date;
    updated_at?: string | Date;
}