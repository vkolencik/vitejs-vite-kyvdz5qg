import type React from "react";
import { useId, useState, type FormEvent } from "react";

export interface UserFilterProps {
  onSearchUpdate: (query: string) => void
}

export const UserFilter = ({ onSearchUpdate }: UserFilterProps) => {

  const queryId = useId();
  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchUpdate(e.target.value);
  }

  return (
    <form className="bg-zinc-200 p-12">
      <label htmlFor={queryId} className="p-6">Search:</label>
      <input id={queryId} type="search" className="border rounded-md" onChange={handleQueryChange}/>
    </form>
  )
};