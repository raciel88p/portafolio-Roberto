import { urlFor } from '../../data/sanity';

export const components = {
  types: {
    image: ({ value }: any) => (
      <div className="my-8 overflow-hidden rounded-3xl shadow-xl transition-shadow hover:shadow-2xl">
        <img
          src={urlFor(value).width(1000).url()}
          alt={value.alt || 'Contenido del blog'}
          className="w-full h-auto object-cover"
          loading="lazy"
        />
        {value.caption && (
          <p className="mt-4 text-center text-sm text-slate-500 italic">
            {value.caption}
          </p>
        )}
      </div>
    ),
  },
  block: {
    h2: ({ children }: any) => <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 tracking-tight">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4 tracking-tight">{children}</h3>,
    normal: ({ children }: any) => <p className="text-lg text-slate-600 leading-relaxed mb-6">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-600 pl-6 my-8 italic text-slate-800 text-xl bg-blue-50/50 py-4 pr-4 rounded-r-xl">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc list-inside space-y-3 mb-8 text-slate-600 marker:text-blue-600">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal list-inside space-y-3 mb-8 text-slate-600 marker:text-blue-600 marker:font-bold">{children}</ol>,
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a
          href={value.href}
          rel={rel}
          className="text-blue-600 font-bold underline decoration-blue-200 underline-offset-4 transition-colors hover:text-blue-700 hover:decoration-blue-400"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }: any) => <strong className="font-bold text-slate-900">{children}</strong>,
  },
};
