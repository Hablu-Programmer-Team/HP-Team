export const timeAgo = (fromDate: Date) => {
  const toDate = new Date();
  const diffMs = Math.abs(toDate.getTime() - fromDate.getTime());
  const diffSec = Math.floor(diffMs / 1000) % 60;
  const diffMin = Math.floor(diffMs / (1000 * 60)) % 60;
  const diffHr = Math.floor(diffMs / (1000 * 60 * 60)) % 24;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays > 0) return `${diffDays}d ${diffHr}h ago`;
  else if (diffHr > 0) return `${diffHr}h ${diffMin}min ago`;
  else if (diffMin > 0) return `${diffMin}min ${diffSec}s ago`;
  else return `Just now`;
};
