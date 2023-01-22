import React, { useEffect } from "react";

const Error = () => {
  useEffect(() => {
    const error = new (Error as any)();
    throw error;
  });

  return null;
};
