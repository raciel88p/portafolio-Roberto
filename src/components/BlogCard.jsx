import { urlFor } from '../data/sanity';

export default function BlogCard({ post }) {
  const publishedDate = new Date(post.publishedAt).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const lang = post.language || 'es';
  const blogPath = lang === 'es' ? '/blog' : `/${lang}/blog`;
  const readMoreText = lang === 'es' ? 'Leer artículo' : 'Read article';

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
        <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors line-clamp-2">
          {post.title}
        </h3>

        {post.author && (
          <div className="flex items-center gap-3 mb-6">
            {post.author.image ? (
              <img
                src={urlFor(post.author.image).width(40).height(40).url()}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover border border-slate-100"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xs">
                {post.author.name.substring(0, 2).toUpperCase()}
              </div>
            )}
            <div>
              <p className="text-sm font-bold text-slate-900 leading-none mb-1">{post.author.name}</p>
              <p className="text-xs text-slate-400 line-clamp-1">{post.author.jobTitle}</p>
            </div>
          </div>
        )}

        <div className="mt-auto pt-6 border-t border-slate-50">
          <a
            href={`${blogPath}/${post.slug.current}`}
            className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center"
          >
            {readMoreText}
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
