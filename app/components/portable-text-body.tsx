import type { PortableTextBlock } from "sanity";

type Span = {
  _key: string;
  _type: "span";
  text: string;
  marks?: string[];
};

type MarkDef = {
  _key: string;
  _type: string;
  href?: string;
  blank?: boolean;
};

type Block = {
  _key: string;
  _type: "block";
  style?: string;
  children?: Span[];
  markDefs?: MarkDef[];
};

type CodeBlock = {
  _key: string;
  _type: "code";
  code?: string;
  language?: string;
};

function renderSpan(span: Span, markDefs: MarkDef[]) {
  let content: React.ReactNode = span.text;

  for (const mark of span.marks ?? []) {
    const def = markDefs.find((d) => d._key === mark);
    if (def) {
      if (def._type === "link") {
        content = (
          <a
            key={`link-${span._key}`}
            href={def.href}
            target={def.blank ? "_blank" : undefined}
            rel={def.blank ? "noopener noreferrer" : undefined}
            className="underline decoration-[var(--accent)] underline-offset-2 hover:text-[var(--accent)] transition-colors"
          >
            {content}
          </a>
        );
      }
    } else {
      if (mark === "strong") content = <strong key={`strong-${span._key}`} className="font-semibold">{content}</strong>;
      if (mark === "em") content = <em key={`em-${span._key}`}>{content}</em>;
      if (mark === "code") content = <code key={`code-${span._key}`} className="bg-[var(--gray-subtle)] px-1.5 py-0.5 rounded text-sm font-mono">{content}</code>;
    }
  }

  return <span key={span._key}>{content}</span>;
}

function renderBlock(block: Block) {
  const markDefs = block.markDefs ?? [];
  const children = (block.children ?? []).map((span) => renderSpan(span, markDefs));

  switch (block.style) {
    case "h2":
      return <h2 key={block._key} className="text-2xl font-bold mt-12 mb-4">{children}</h2>;
    case "h3":
      return <h3 key={block._key} className="text-xl font-bold mt-8 mb-3">{children}</h3>;
    case "h4":
      return <h4 key={block._key} className="text-lg font-semibold mt-6 mb-2">{children}</h4>;
    case "blockquote":
      return (
        <blockquote key={block._key} className="border-l-4 border-[var(--accent)] pl-5 my-6 text-[var(--gray-muted)] italic">
          {children}
        </blockquote>
      );
    default:
      return <p key={block._key} className="mb-6 leading-relaxed">{children}</p>;
  }
}

export function PortableTextBody({ value }: { value: PortableTextBlock[] }) {
  return (
    <>
      {(value as (Block | CodeBlock)[]).map((block) => {
        if (block._type === "code") {
          return (
            <pre key={block._key} className="bg-[var(--foreground)] text-white rounded-xl p-5 my-6 overflow-x-auto text-sm font-mono leading-relaxed">
              <code>{(block as CodeBlock).code}</code>
            </pre>
          );
        }
        if (block._type === "block") {
          return renderBlock(block as Block);
        }
        return null;
      })}
    </>
  );
}
