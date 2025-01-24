import React from 'react';
import { useVirtual } from '@tanstack/react-virtual';
import { formatDistanceToNow } from 'date-fns';
import { Paperclip } from 'lucide-react';

const EmailList = () => {
  const parentRef = React.useRef<HTMLDivElement>(null);
  
  // Placeholder data - will be replaced with Redux data
  const emails = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    sender: 'example@mail.tm',
    subject: `Test Email ${i}`,
    preview: 'This is a preview of the email content...',
    timestamp: new Date(),
    hasAttachments: Math.random() > 0.5,
    isUnread: Math.random() > 0.5,
  }));

  const rowVirtualizer = useVirtual({
    size: emails.length,
    parentRef,
    estimateSize: React.useCallback(() => 80, []),
    overscan: 5,
  });

  return (
    <div ref={parentRef} className="h-full overflow-auto">
      <div
        className="relative w-full"
        style={{ height: `${rowVirtualizer.totalSize}px` }}
      >
        {rowVirtualizer.virtualItems.map((virtualRow) => {
          const email = emails[virtualRow.index];
          return (
            <div
              key={virtualRow.index}
              className={`absolute top-0 left-0 w-full ${
                email.isUnread ? 'bg-blue-50' : 'bg-white'
              } border-b border-gray-200 hover:bg-gray-50 cursor-pointer`}
              style={{
                height: `${virtualRow.size}px`,
                transform: `translateY(${virtualRow.start}px)`,
              }}
            >
              <div className="p-4">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-medium">{email.sender}</span>
                  <span className="text-sm text-gray-500">
                    {formatDistanceToNow(email.timestamp, { addSuffix: true })}
                  </span>
                </div>
                <h3 className="text-sm font-medium mb-1 truncate">
                  {email.subject}
                </h3>
                <p className="text-sm text-gray-600 truncate">{email.preview}</p>
                {email.hasAttachments && (
                  <Paperclip className="w-4 h-4 text-gray-400 absolute right-4 bottom-4" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EmailList;
