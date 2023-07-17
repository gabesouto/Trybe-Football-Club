// src/utils/mapStatusHTTP.ts

export default function mapStatusHTTP(status: string): number {
  switch (status) {
    case 'SUCCESSFUL': return 200;
    case 'UNAUTHORIZED': return 400;
    case 'NOT_FOUND': return 404;
    case 'CONFLICT': return 409;
    default: return 500;
  }
}
