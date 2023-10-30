/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { createPaginator } from "prisma-pagination";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertNullToUndefined(obj: any): any {
  if (obj === null) {
    return undefined;
  }

  if (typeof obj === 'object') {
    if (Array.isArray(obj)) {
      return obj.map((value) => convertNullToUndefined(value));
    }

    const convertedObj: any = {};

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        convertedObj[key] = convertNullToUndefined(obj[key]);
      }
    }

    return convertedObj;
  }

  return obj;
}


export function formateDate(date: number | Date | undefined | string) {
  return new Intl.DateTimeFormat('en-US').format(date ? new Date(date) : undefined)
}

export function getRandomEnumValue<T extends ArrayLike<any>>(enumeration: T): T[keyof T] {
  const values = Object.values(enumeration);
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
}

export function getRandomArrayElement<T>(data: T[]) {
  const randomIndex = Math.floor(Math.random() * data.length);
  return data[randomIndex];
}

export function groupIntoRows<T>(data: T[], itemsPerRow: number): T[][] {
  const rows: T[][] = [];

  for (let i = 0; i < data.length; i += itemsPerRow) {
    const row = data.slice(i, i + itemsPerRow);
    rows.push(row);
  }

  return rows;
}


export const paginate = createPaginator({ perPage: 10 });

function concatAddress(parts: (string | undefined)[]): string {
  const filteredParts = parts.filter((part) => part !== undefined);
  return filteredParts.join(', ');
}
