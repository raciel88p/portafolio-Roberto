import { urlFor } from '../data/sanity';

export default function BlogCard({ post }) {
  const publishedDate = new Date(post.publishedAt).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <article className="group bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
      {post.mainImage && (
        <div className="aspect-[16/10] bg-slate-100 relative overflow-hidden">
          <img
            src={urlFor(post.mainImage).width(800).height(500).url()}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-4 mb-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
          <span>{publishedDate}</span>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <div className="mt-auto pt-6">
          <a
            href={`/blog/${post.slug.current}`}
            className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center"
          >
            Leer artículo
            <svg
              className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}
