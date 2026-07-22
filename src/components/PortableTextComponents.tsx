import React from 'react';

export const components = {
  block: {
    normal: ({ children }: any) => <p className="mb-6 leading-relaxed text-slate-700">{children}</p>,
    h1: ({ children }: any) => <h1 className="text-3xl md:text-4xl font-extrabold text-slate-950 mt-12 mb-6 tracking-tight">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-10 mb-4 tracking-tight">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl md:text-2xl font-bold text-slate-900 mt-8 mb-3 tracking-tight">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-lg md:text-xl font-bold text-slate-900 mt-6 mb-2">{children}</h4>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-600 pl-4 italic my-6 text-slate-600 bg-slate-50 py-3 pr-3 rounded-r-xl">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc list-inside mb-6 pl-4 space-y-2 text-slate-700">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal list-inside mb-6 pl-4 space-y-2 text-slate-700">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }: any) => <li className="leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-bold text-slate-900">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    code: ({ children }: any) => <code className="bg-slate-100 text-pink-600 rounded px-1.5 py-0.5 text-sm font-mono">{children}</code>,
    link: ({ value, children }: any) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-blue-600 hover:text-blue-700 font-semibold underline decoration-2 decoration-blue-200 hover:decoration-blue-500 transition-colors"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?.url) return null;
      return (
        <div className="my-8 rounded-2xl overflow-hidden shadow-sm">
          <img src={value.asset.url} alt={value.alt || 'Image'} className="w-full h-auto object-cover" />
          {value.caption && <p className="text-xs text-center text-slate-500 mt-2 italic">{value.caption}</p>}
        </div>
      );
    },
  },
};
