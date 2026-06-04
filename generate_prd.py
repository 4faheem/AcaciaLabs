#!/usr/bin/env python3
"""
Acacia Labs — PRD Document Generator
Meridian Intelligence design philosophy
9-page A4 PDF in deep navy enterprise aesthetic
"""

import os
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas as pdf_canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.colors import Color, HexColor

W, H = A4  # 595.27 x 841.89 pt

# ── Colors ─────────────────────────────────────────────────────────────────
BG      = HexColor('#060B18')
BG2     = HexColor('#0A1228')
BG3     = HexColor('#0E1A3A')
TEXT    = HexColor('#EFF6FF')
TEXTSEC = HexColor('#7EA8D8')
TEXTMT  = HexColor('#3A5578')
BLUE    = HexColor('#3B82F6')
INDIGO  = HexColor('#6366F1')
CYAN    = HexColor('#22D3EE')
GOLD    = HexColor('#F59E0B')
SUCCESS = HexColor('#34D399')

def A(color, alpha=1.0):
    return Color(color.red, color.green, color.blue, alpha)

# ── Fonts ───────────────────────────────────────────────────────────────────
FD = r'C:\Users\HP\.claude\skills\canvas-design\canvas-fonts'

def reg(name, f):
    path = os.path.join(FD, f)
    if os.path.exists(path):
        pdfmetrics.registerFont(TTFont(name, path))

reg('Inst',      'InstrumentSans-Regular.ttf')
reg('InstB',     'InstrumentSans-Bold.ttf')
reg('JB',        'JetBrainsMono-Regular.ttf')
reg('JBB',       'JetBrainsMono-Bold.ttf')
reg('Gloock',    'Gloock-Regular.ttf')
reg('BG',        'BricolageGrotesque-Regular.ttf')
reg('BGB',       'BricolageGrotesque-Bold.ttf')
reg('WorkSans',  'WorkSans-Regular.ttf')
reg('WorkSansB', 'WorkSans-Bold.ttf')

# ── Drawing Helpers ─────────────────────────────────────────────────────────

def fill_bg(c, col=None):
    c.setFillColor(col or BG)
    c.rect(0, 0, W, H, fill=1, stroke=0)

def grid(c, x=0, y=0, w=None, h=None, cell=30, alpha=0.022):
    if w is None: w = W
    if h is None: h = H
    c.setStrokeColor(A(BLUE, alpha))
    c.setLineWidth(0.3)
    for xi in range(0, int(w) + cell, cell):
        if x + xi <= x + w:
            c.line(x + xi, y, x + xi, y + h)
    for yi in range(0, int(h) + cell, cell):
        if y + yi <= y + h:
            c.line(x, y + yi, x + w, y + yi)

def orb(c, cx, cy, r, col, steps=40):
    for i in range(steps, 0, -1):
        ratio = i / steps
        alpha = (ratio ** 1.8) * 0.26
        c.setFillColor(Color(col.red, col.green, col.blue, alpha))
        c.circle(cx, cy, r * ratio, fill=1, stroke=0)

def specular(c, cx, cy, r):
    sx, sy = cx - r * 0.20, cy + r * 0.26
    for i in range(18, 0, -1):
        ratio = i / 18
        c.setFillColor(Color(0.88, 0.85, 1.0, (ratio ** 2) * 0.32))
        c.circle(sx, sy, r * 0.30 * ratio, fill=1, stroke=0)

def ring(c, cx, cy, rx, ry, col, alpha=0.14, lw=0.5):
    c.setStrokeColor(A(col, alpha))
    c.setLineWidth(lw)
    c.ellipse(cx - rx, cy - ry, cx + rx, cy + ry, fill=0, stroke=1)

def gline(c, x, y, w, c1=None, c2=None, lw=0.8, steps=60):
    if c1 is None: c1 = INDIGO
    if c2 is None: c2 = CYAN
    c.setLineWidth(lw)
    sw = w / steps
    for i in range(steps):
        t = i / steps
        env = 4 * t * (1 - t)
        r_ = c1.red   * (1 - t) + c2.red   * t
        g_ = c1.green * (1 - t) + c2.green * t
        b_ = c1.blue  * (1 - t) + c2.blue  * t
        c.setStrokeColor(Color(r_, g_, b_, env * 0.55))
        xi = x + i * sw
        c.line(xi, y, xi + sw + 0.5, y)

def eyebrow(c, x, y, n, title, col=None):
    if col is None: col = CYAN
    c.setFont('JB', 7)
    c.setFillColor(A(col, 0.75))
    c.drawString(x, y, f'§{n:02d}')
    c.setFillColor(A(TEXT, 0.28))
    c.drawString(x + 22, y, f'// {title.upper()}')

def header(c, pg, section, total=9):
    c.setFillColor(A(BG2, 1))
    c.rect(0, H - 28, W, 28, fill=1, stroke=0)
    gline(c, 0, H - 29, W, lw=0.6)
    c.setFont('JB', 7)
    c.setFillColor(A(TEXTMT, 0.9))
    c.drawString(24, H - 18, 'ACACIA LABS')
    c.setFillColor(A(INDIGO, 0.7))
    c.drawRightString(W - 24, H - 18, f'PRD v1.0  ·  {section.upper()}  ·  {pg}/{total}')

def footer(c):
    gline(c, 0, 28, W, lw=0.5)
    c.setFillColor(A(BG2, 1))
    c.rect(0, 0, W, 27, fill=1, stroke=0)
    c.setFont('JB', 6.5)
    c.setFillColor(A(TEXTMT, 0.8))
    c.drawString(24, 10, 'OPERATIONAL INTELLIGENCE INFRASTRUCTURE  ·  CONFIDENTIAL')
    c.drawRightString(W - 24, 10, 'DAR ES SALAAM, TANZANIA  ·  2026')

def wrap_text(c, x, y, text, font, size, color, max_w, lh_mult=1.5):
    c.setFont(font, size)
    c.setFillColor(color)
    lh = size * lh_mult
    words = text.split()
    line = ''
    cy = y
    for w_ in words:
        test = (line + ' ' + w_).strip()
        if c.stringWidth(test, font, size) <= max_w:
            line = test
        else:
            if line:
                c.drawString(x, cy, line)
                cy -= lh
            line = w_
    if line:
        c.drawString(x, cy, line)
        cy -= lh
    return cy

def table(c, x, y, rows, cws, rh=17, accent=None, hdr_col=None, fnt_sz=8):
    if accent is None: accent = INDIGO
    if hdr_col is None: hdr_col = CYAN
    tw = sum(cws)
    cy = y
    for ri, row in enumerate(rows):
        is_hdr = ri == 0
        h_ = rh * 1.35 if is_hdr else rh
        # row bg
        if is_hdr:
            c.setFillColor(A(BG3, 1))
        elif ri % 2 == 0:
            c.setFillColor(A(BG2, 0.6))
        else:
            c.setFillColor(Color(0.024, 0.043, 0.098, 0.5))
        c.rect(x, cy - h_, tw, h_, fill=1, stroke=0)
        # header top border
        if is_hdr:
            c.setStrokeColor(A(accent, 0.45))
            c.setLineWidth(1)
            c.line(x, cy, x + tw, cy)
        # bottom border
        c.setStrokeColor(A(INDIGO, 0.07))
        c.setLineWidth(0.3)
        c.line(x, cy - h_, x + tw, cy - h_)
        # cells
        cx_ = x
        for ci, (cell, cw) in enumerate(zip(row, cws)):
            pad = 7
            tx_ = cx_ + pad
            ty_ = cy - h_ + (h_ - (11 if is_hdr else fnt_sz)) / 2 + (2 if is_hdr else 0)
            s = str(cell)
            if is_hdr:
                c.setFont('JB', 6.5)
                c.setFillColor(hdr_col)
                c.drawString(tx_, ty_, s.upper()[:int(cw / 4.5)])
            else:
                c.setFont('InstB' if ci == 0 else 'Inst', fnt_sz)
                c.setFillColor(A(TEXT, 0.9) if ci == 0 else A(TEXTSEC, 0.85))
                trunc = s if len(s) <= int(cw / (fnt_sz * 0.5)) else s[:int(cw / (fnt_sz * 0.5)) - 2] + '…'
                c.drawString(tx_, ty_, trunc)
            cx_ += cw
        cy -= h_
    # bottom rule
    c.setStrokeColor(A(accent, 0.3))
    c.setLineWidth(0.6)
    c.line(x, cy, x + tw, cy)
    return cy

def metric_card(c, x, y, w, h, val, label, col):
    c.setFillColor(A(BG3, 0.9))
    c.rect(x, y, w, h, fill=1, stroke=0)
    c.setStrokeColor(A(col, 0.55))
    c.setLineWidth(1.1)
    c.line(x, y + h, x + w, y + h)
    c.setFillColor(A(col, 0.1))
    c.rect(x, y, 2, h, fill=1, stroke=0)
    c.setFont('BGB', 20)
    c.setFillColor(col)
    c.drawString(x + 9, y + h - 30, str(val))
    c.setFont('JB', 6)
    c.setFillColor(A(TEXT, 0.75))
    c.drawString(x + 9, y + 9, str(label).upper()[:int(w / 4.5)])


# ── Pages ───────────────────────────────────────────────────────────────────

def cover(c):
    fill_bg(c)
    grid(c, cell=34, alpha=0.02)

    # Main orb — right side
    orb(c, W * 0.80, H * 0.52, 230, INDIGO, steps=55)
    orb(c, W * 0.80, H * 0.52, 130, BLUE, steps=35)
    specular(c, W * 0.80, H * 0.52, 230)
    ring(c, W * 0.80, H * 0.52, 275, 105, INDIGO, 0.13, 0.6)
    ring(c, W * 0.80, H * 0.52, 320, 65,  CYAN,   0.08, 0.4)
    ring(c, W * 0.80, H * 0.52, 210, 210, BLUE,   0.06, 0.3)

    # Secondary small orb — lower left
    orb(c, W * 0.10, H * 0.20, 75, CYAN, steps=22)
    ring(c, W * 0.10, H * 0.20, 95, 36, CYAN, 0.10, 0.4)

    # Left vertical accent
    c.setFillColor(A(INDIGO, 0.05))
    c.rect(0, 0, 4, H, fill=1, stroke=0)
    c.setFillColor(A(CYAN, 0.55))
    c.rect(0, H * 0.35, 2, H * 0.28, fill=1, stroke=0)

    # Eyebrow
    c.setFont('JB', 8)
    c.setFillColor(A(CYAN, 0.7))
    c.drawString(36, H - 78, 'PRODUCT REQUIREMENTS DOCUMENT  //  V1.0  //  LIVING')

    # Company name
    c.setFont('BGB', 80)
    c.setFillColor(TEXT)
    c.drawString(28, H - 172, 'ACACIA')
    c.setFont('BGB', 80)
    c.setFillColor(A(TEXT, 0.12))
    c.drawString(28, H - 254, 'LABS')

    gline(c, 28, H - 268, 265, INDIGO, CYAN, lw=1.3)

    c.setFont('Inst', 13.5)
    c.setFillColor(A(TEXTSEC, 0.85))
    c.drawString(28, H - 294, 'Operational Intelligence Infrastructure')

    c.setFont('Inst', 9)
    c.setFillColor(A(TEXTSEC, 0.55))
    c.drawString(28, H - 318, 'AI-native systems for East African enterprise — unified financial ledgers,')
    c.drawString(28, H - 331, 'workflow automation, and real-time operational coordination.')

    # Metric cards
    cards = [
        ('$1.2M+', 'Revenue Tracked', SUCCESS),
        ('+142%',  'YoY Growth',      CYAN),
        ('2,400+', 'Workflows',       BLUE),
        ('99.99%', 'Uptime SLA',      GOLD),
    ]
    mw, mh, mg = 119, 68, 3
    mx = 28
    for val, lbl, col in cards:
        metric_card(c, mx, H - 418, mw, mh, val, lbl, col)
        mx += mw + mg

    # Footer band
    gline(c, 0, 96, W, INDIGO, CYAN, lw=1.5)
    c.setFillColor(A(BG2, 1))
    c.rect(0, 0, W, 92, fill=1, stroke=0)

    # Author info
    c.setFont('JB', 6.5)
    c.setFillColor(A(TEXTMT, 0.9))
    c.drawString(28, 68, 'AUTHORS')
    c.setFont('InstB', 9)
    c.setFillColor(A(TEXT, 0.9))
    c.drawString(28, 52, 'Fahim Kiama')
    c.setFont('JB', 6.5)
    c.setFillColor(A(TEXTMT, 0.8))
    c.drawString(28, 38, 'Founder & CEO')

    c.setFont('InstB', 9)
    c.setFillColor(A(TEXT, 0.9))
    c.drawString(148, 52, 'Gwamaka Johas')
    c.setFont('JB', 6.5)
    c.setFillColor(A(TEXTMT, 0.8))
    c.drawString(148, 38, 'Chief Operating Officer')

    # Dividers
    for dx in [278, 360, 448]:
        c.setStrokeColor(A(INDIGO, 0.18))
        c.setLineWidth(0.5)
        c.line(dx, 36, dx, 74)

    for lx, label, val, vcol in [
        (290, 'DATE',   '2026-06-01',      TEXT),
        (372, 'STATUS', 'Living Document', CYAN),
        (460, 'HQ',     'Dar es Salaam',   TEXT),
    ]:
        c.setFont('JB', 6.5); c.setFillColor(A(TEXTMT, 0.9)); c.drawString(lx, 68, label)
        c.setFont('Inst', 9);  c.setFillColor(A(vcol, 0.9));   c.drawString(lx, 52, val)

    c.setFont('JB', 6); c.setFillColor(A(TEXTMT, 0.6))
    c.drawCentredString(W/2, 14, 'CONFIDENTIAL — FOR INTERNAL AND INVESTOR USE ONLY')


def exec_summary(c):
    fill_bg(c)
    grid(c, cell=36, alpha=0.016)
    header(c, 2, 'Executive Summary')
    footer(c)
    orb(c, W + 50, H - 70, 150, INDIGO, 28)

    x, y, cw = 36, H - 52, W - 72

    eyebrow(c, x, y, 1, 'Executive Summary', CYAN)
    y -= 22

    # Hero statement
    c.setFont('Gloock', 18)
    c.setFillColor(TEXT)
    c.drawString(x, y, 'Operational certainty for')
    y -= 24
    c.setFillColor(CYAN)
    c.drawString(x, y, 'East African enterprise.')
    y -= 16
    gline(c, x, y, 200, INDIGO, CYAN, lw=0.9)
    y -= 16

    # Summary — two-column layout
    col1_w = cw * 0.60
    col2_x = x + cw * 0.67
    col2_w = cw * 0.32

    summary = ('Acacia Labs builds AI-native operational infrastructure for East African businesses. '
               'We replace fragmented workflows — scattered across mobile money networks, WhatsApp '
               'chains, and manual spreadsheets — with unified, automated enterprise systems '
               'built for real regional conditions.')
    y = wrap_text(c, x, y, summary, 'Inst', 9, A(TEXTSEC, 0.88), col1_w)
    y -= 10

    # Product sidebar
    p2y = H - 128
    for prod_title, prod_sub, lines, col in [
        ('E-Manager', 'PRODUCT 01', ['Financial ledger', 'Workflow automation', 'Carrier reconciliation'], CYAN),
        ('syncAI',    'PRODUCT 02', ['Real-time AI sync', 'Event routing', 'Conflict resolution'],        INDIGO),
    ]:
        c.setFillColor(A(BG3, 0.88))
        c.rect(col2_x, p2y - 76, col2_w, 74, fill=1, stroke=0)
        c.setStrokeColor(A(col, 0.4))
        c.setLineWidth(0.9)
        c.line(col2_x, p2y - 2, col2_x + col2_w, p2y - 2)
        c.setFont('JB', 6.5); c.setFillColor(A(col, 0.8))
        c.drawString(col2_x + 9, p2y - 18, prod_sub)
        c.setFont('InstB', 10); c.setFillColor(TEXT)
        c.drawString(col2_x + 9, p2y - 34, prod_title)
        py_ = p2y - 50
        for ln in lines:
            c.setFont('Inst', 7.5); c.setFillColor(A(TEXTSEC, 0.8))
            c.drawString(col2_x + 9, py_, '· ' + ln); py_ -= 12
        p2y -= 90

    # Problem section
    y = min(y, H - 310)
    eyebrow(c, x, y, 2, 'Problem Statement', BLUE)
    y -= 20

    c.setFont('InstB', 12); c.setFillColor(TEXT)
    c.drawString(x, y, 'Extreme execution fragmentation.')
    y -= 16

    prob = ('African commerce suffers from transactions scattered across M-Pesa, Airtel Money, '
            'Tigopesa, WhatsApp chains, and verbal handoffs. Without unified coordination, '
            'enterprise scale becomes a liability — every expansion multiplies complexity, not efficiency.')
    y = wrap_text(c, x, y, prob, 'Inst', 9, A(TEXTSEC, 0.85), col1_w)
    y -= 14

    c.setFont('JB', 7); c.setFillColor(A(CYAN, 0.7))
    c.drawString(x, y, 'QUANTIFIED IMPACT  //  PER MEDIUM ENTERPRISE, PER MONTH')
    y -= 8

    rows = [
        ['Problem', 'Estimated Loss'],
        ['Untracked cash-flow leakage', '8–12% of monthly revenue'],
        ['Manual reconciliation overhead', '60–120 operator-hours/month'],
        ['Communication handoff failure rate', '22% of field operations'],
        ['Reporting latency vs real-time', '5–7 business days'],
    ]
    cws_ = [col1_w * 0.60, col1_w * 0.40]
    table(c, x, y, rows, cws_, rh=15, accent=BLUE, hdr_col=BLUE)
    y -= len(rows) * 16 + 18

    # Why solutions fail
    if y > 100:
        c.setFont('JB', 7); c.setFillColor(A(GOLD, 0.7))
        c.drawString(x, y, 'WHY EXISTING SOLUTIONS FAIL')
        y -= 14
        for name, reason in [
            ('Salesforce / SAP', 'Western enterprise design; no M-Pesa depth, fails on bandwidth constraints'),
            ('Local ERP systems', 'No AI layer; no real-time carrier integrations'),
            ('WhatsApp + Sheets', 'Non-auditable, unscalable, zero automation'),
        ]:
            c.setFont('InstB', 8.5); c.setFillColor(A(TEXT, 0.9))
            c.drawString(x, y, name + ' —')
            nw = c.stringWidth(name + ' —', 'InstB', 8.5)
            c.setFont('Inst', 8.5); c.setFillColor(A(TEXTSEC, 0.75))
            trunc = reason[:68] + '…' if len(reason) > 68 else reason
            c.drawString(x + nw + 4, y, trunc)
            y -= 14


def market_personas(c):
    fill_bg(c)
    grid(c, cell=36, alpha=0.016)
    header(c, 3, 'Market & Users')
    footer(c)

    x, y, cw = 36, H - 52, W - 72

    eyebrow(c, x, y, 3, 'Market Opportunity', SUCCESS)
    y -= 22

    c.setFont('Gloock', 16); c.setFillColor(TEXT)
    c.drawString(x, y, '$14.2B total addressable market.')
    y -= 22

    # TAM/SAM/SOM bars
    bar_max = cw * 0.52
    for abbr, size, label, ratio, col in [
        ('TAM', '$14.2B', 'East African enterprise software (2026E)', 1.00, A(INDIGO, 0.72)),
        ('SAM', '$2.8B',  'Businesses >10 employees needing ops software', 0.197, A(BLUE, 0.80)),
        ('SOM', '$180M',  'TZ + KE SME/mid-market reachable by 2028',    0.0127, A(CYAN, 0.90)),
    ]:
        c.setFillColor(A(BG3, 0.5))
        c.rect(x, y - 10, bar_max, 14, fill=1, stroke=0)
        bw = max(bar_max * ratio, 14)
        c.setFillColor(col)
        c.rect(x, y - 10, bw, 14, fill=1, stroke=0)
        c.setFont('JBB', 7); c.setFillColor(TEXT)
        c.drawString(x + bar_max + 9, y + 1, abbr)
        c.setFont('BGB', 10); c.setFillColor(col)
        c.drawString(x + bar_max + 36, y + 1, size)
        c.setFont('Inst', 7.5); c.setFillColor(A(TEXTSEC, 0.7))
        c.drawString(x + bar_max + 90, y + 1, label[:44])
        y -= 27

    y -= 10
    c.setFont('JB', 7); c.setFillColor(A(CYAN, 0.7))
    c.drawString(x, y, 'WHY NOW')
    y -= 14
    for stat, desc in [
        ('78%',       'Mobile money penetration in East Africa (2025)'),
        ('+31% YoY',  'Smartphone adoption growth in Tanzania'),
        ('3 nations',  'Regulatory push for digital financial reporting: TZ, KE, UG'),
        ('Zero',      'Dominant regional player in AI-native operational software'),
    ]:
        c.setFont('InstB', 9); c.setFillColor(CYAN)
        c.drawString(x, y, stat)
        sw = c.stringWidth(stat, 'InstB', 9)
        c.setFont('Inst', 8.5); c.setFillColor(A(TEXTSEC, 0.85))
        c.drawString(x + sw + 10, y, desc)
        y -= 15

    y -= 14
    gline(c, x, y + 6, cw, INDIGO, CYAN, lw=0.6)
    eyebrow(c, x, y, 4, 'User Personas', GOLD)
    y -= 20

    personas = [
        ('A', 'The Enterprise Operator',  'Ops Manager, mid-size TZ distributor',
         'Reconciles M-Pesa receipts manually every Friday',
         'Real-time financial visibility without extra headcount',
         'Reconciliation: 8 hrs → 20 min', BLUE),
        ('B', 'The Growth CEO',           'Founder scaling from 3 cities to 7',
         'Cannot trust numbers from regional managers',
         'Single dashboard across all operational nodes',
         'Reporting: 2 days → real-time', INDIGO),
        ('C', 'The Field Coordinator',    'Manages 30+ delivery agents, Dar es Salaam',
         'Agents report via WhatsApp; updates unreliable',
         'Route-by-route visibility + automated alerts',
         'Failed delivery rate: −40%', CYAN),
    ]

    ccard_w = (cw - 8) / 3
    ccard_h = 168

    for i, (code, title, role, pain, goal, metric, col) in enumerate(personas):
        px = x + i * (ccard_w + 4)
        py = y - ccard_h

        c.setFillColor(A(BG3, 0.85))
        c.rect(px, py, ccard_w, ccard_h, fill=1, stroke=0)
        c.setStrokeColor(A(col, 0.5))
        c.setLineWidth(1.2)
        c.line(px, py + ccard_h, px + ccard_w, py + ccard_h)
        c.setFillColor(A(col, 0.1))
        c.rect(px, py, 2.5, ccard_h, fill=1, stroke=0)

        # Avatar
        ax, ay = px + 15, py + ccard_h - 26
        c.setFillColor(A(col, 0.15))
        c.circle(ax, ay, 11, fill=1, stroke=0)
        c.setFont('JBB', 8.5); c.setFillColor(col)
        c.drawCentredString(ax, ay - 4, code)

        c.setFont('InstB', 9.5); c.setFillColor(TEXT)
        c.drawString(px + 32, py + ccard_h - 24, title[:20])
        c.setFont('JB', 6); c.setFillColor(A(TEXTMT, 1))
        c.drawString(px + 8, py + ccard_h - 40, role[:34])

        c.setStrokeColor(A(INDIGO, 0.15))
        c.setLineWidth(0.4)
        c.line(px + 8, py + ccard_h - 47, px + ccard_w - 8, py + ccard_h - 47)

        iy = py + ccard_h - 64
        for lbl, val, lcol in [
            ('PAIN', pain,   A(GOLD, 0.8)),
            ('GOAL', goal,   A(SUCCESS, 0.8)),
            ('WIN',  metric, col),
        ]:
            c.setFont('JB', 5.5); c.setFillColor(lcol)
            c.drawString(px + 8, iy, lbl)
            c.setFont('Inst', 7.5); c.setFillColor(A(TEXTSEC, 0.85))
            max_c = int((ccard_w - 16) / 4.2)
            c.drawString(px + 8, iy - 11, val[:max_c])
            iy -= 31

        # Win badge
        c.setFillColor(A(col, 0.09))
        c.rect(px + 6, py + 6, ccard_w - 12, 20, fill=1, stroke=0)
        c.setFont('JBB', 6); c.setFillColor(col)
        c.drawCentredString(px + ccard_w / 2, py + 12, metric[:38])


def vision_emanager(c):
    fill_bg(c)
    grid(c, cell=36, alpha=0.016)
    header(c, 4, 'Vision & E-Manager')
    footer(c)
    orb(c, W + 30, H * 0.55, 140, CYAN, 24)

    x, y, cw = 36, H - 52, W - 72

    eyebrow(c, x, y, 5, 'Product Vision & OKRs', CYAN)
    y -= 20

    # Vision block
    c.setFillColor(A(BG3, 0.82))
    c.rect(x, y - 58, cw, 56, fill=1, stroke=0)
    c.setFillColor(A(CYAN, 0.42))
    c.rect(x, y - 58, 2.5, 56, fill=1, stroke=0)
    c.setStrokeColor(A(CYAN, 0.28))
    c.setLineWidth(0.9)
    c.line(x, y - 2, x + cw, y - 2)

    c.setFont('JB', 6.5); c.setFillColor(A(CYAN, 0.6))
    c.drawString(x + 14, y - 17, 'VISION STATEMENT')
    c.setFont('Gloock', 11.5); c.setFillColor(TEXT)
    c.drawString(x + 14, y - 33, 'Every East African business operates with Fortune 500 infrastructure precision —')
    c.setFont('Gloock', 11.5); c.setFillColor(A(TEXTSEC, 0.65))
    c.drawString(x + 14, y - 50, 'built for their actual conditions.')
    y -= 75

    # OKRs
    c.setFont('JB', 7); c.setFillColor(A(GOLD, 0.7))
    c.drawString(x, y, '12-MONTH OKRs')
    y -= 8
    okrs = [
        ['Objective', 'Key Results'],
        ['O1: E-Manager Product-Market Fit', 'KR1: 50 enterprise customers · KR2: NPS ≥ 45 · KR3: Churn < 2%'],
        ['O2: syncAI Operational Backbone',  'KR1: 10K synced ops/day · KR2: 99.9% uptime · KR3: 5 integrations'],
        ['O3: East African Brand Authority', 'KR1: 3 media features · KR2: 500+ subscribers · KR3: 2 partnerships'],
    ]
    table(c, x, y, okrs, [cw * 0.30, cw * 0.70], rh=16, accent=GOLD, hdr_col=GOLD)
    y -= len(okrs) * 17 + 22

    gline(c, x, y + 8, cw, CYAN, INDIGO, lw=0.6)
    eyebrow(c, x, y, 6, 'E-Manager — Feature Requirements', CYAN)
    y -= 18

    c.setFont('Inst', 9); c.setFillColor(A(TEXTSEC, 0.78))
    c.drawString(x, y, 'Unified financial ledger, workflow automation, and multi-carrier payment reconciliation.')
    y -= 18

    c.setFont('JB', 7); c.setFillColor(A(CYAN, 0.7))
    c.drawString(x, y, 'P0 — MUST SHIP (CORE PRODUCT)')
    y -= 8
    p0 = [
        ['Feature', 'User Story', 'Success Metric'],
        ['Multi-carrier ledger', 'View M-Pesa, Airtel Money, Tigopesa in one ledger', '<5 min reconciliation'],
        ['Workflow builder', 'Create automated approval chains without code', 'First workflow in 30 min'],
        ['Real-time dashboard', 'See revenue, workflows, team status live', 'Load <2s on 3G'],
        ['Financial reports', 'Export audit-ready P&L and cash flow reports', 'PDF/Excel in <10 sec'],
        ['Role-based access', 'Limit what each team member sees and edits', 'RBAC setup ≤5 min'],
        ['Offline resilience', 'Data entered offline syncs on reconnect', 'Zero data loss'],
    ]
    table(c, x, y, p0, [cw*0.24, cw*0.47, cw*0.29], rh=15, accent=CYAN, hdr_col=CYAN)
    y -= len(p0) * 16 + 16

    if y > 95:
        c.setFont('JB', 7); c.setFillColor(A(BLUE, 0.7))
        c.drawString(x, y, 'P1 — NEXT QUARTER')
        y -= 8
        p1 = [
            ['Feature', 'Notes'],
            ['Mobile PWA', 'Field agents submit from feature phones — no native app needed'],
            ['SMS notifications', 'Critical for low-smartphone environments'],
            ['Carrier API webhooks', 'M-Pesa Daraja auto-ingest — requires Safaricom partnership'],
            ['Custom report builder', 'Non-technical drag-and-drop interface'],
        ]
        table(c, x, y, p1, [cw*0.24, cw*0.76], rh=14, accent=BLUE, hdr_col=BLUE)


def syncai_tech(c):
    fill_bg(c)
    grid(c, cell=36, alpha=0.016)
    header(c, 5, 'syncAI & Architecture')
    footer(c)
    orb(c, -50, H * 0.45, 110, INDIGO, 24)

    x, y, cw = 36, H - 52, W - 72

    eyebrow(c, x, y, 7, 'syncAI — Feature Requirements', INDIGO)
    y -= 20

    c.setFont('Inst', 9); c.setFillColor(A(TEXTSEC, 0.78))
    c.drawString(x, y, 'Real-time AI synchronization — the nervous system of Acacia\'s operational infrastructure.')
    y -= 18

    c.setFont('JB', 7); c.setFillColor(A(INDIGO, 0.8))
    c.drawString(x, y, 'P0 — CORE CAPABILITIES')
    y -= 8
    sp0 = [
        ['Capability', 'Description', 'Target'],
        ['Event stream', 'Unified event bus for all operational data', '≥ 88,000 ops/sec'],
        ['AI routing', 'Auto-route exceptions, alerts, and approvals to the right person', '<500ms decision latency'],
        ['Conflict resolution', 'AI resolves concurrent record updates correctly', '99.8% merge accuracy'],
        ['Audit trail', 'Every state change: actor, timestamp, reason', 'Full immutable log'],
    ]
    table(c, x, y, sp0, [cw*0.22, cw*0.50, cw*0.28], rh=16, accent=INDIGO, hdr_col=INDIGO)
    y -= len(sp0) * 17 + 16

    c.setFont('JB', 7); c.setFillColor(A(CYAN, 0.7))
    c.drawString(x, y, 'SYNC AI SUCCESS METRICS')
    y -= 16

    mcards = [('≤ 8ms', 'System Latency', CYAN), ('500K/day', 'Synced Ops Target', SUCCESS),
              ('≥ 99.5%', 'AI Routing Accuracy', BLUE), ('99.99%', 'Uptime SLA', GOLD)]
    mw_ = (cw - 9) / 4
    for i, (val, lbl, col) in enumerate(mcards):
        metric_card(c, x + i * (mw_ + 3), y - 58, mw_, 56, val, lbl, col)
    y -= 76

    gline(c, x, y + 8, cw, INDIGO, BLUE, lw=0.6)
    eyebrow(c, x, y, 8, 'Technical Architecture', BLUE)
    y -= 18

    c.setFont('JB', 7); c.setFillColor(A(GOLD, 0.7))
    c.drawString(x, y, 'DESIGN CONSTRAINTS — NON-NEGOTIABLE')
    y -= 14

    for name, desc in [
        ('Low-bandwidth first', 'All features work on 2G/3G. No feature requires >100KB mobile load.'),
        ('Offline-capable', 'Local-first architecture with eventual consistency sync.'),
        ('Multi-carrier', 'M-Pesa Daraja v2, Airtel Money API, Tigopesa — all required.'),
        ('Data sovereignty', 'All customer data stored in-region (Tanzania/Kenya data centers).'),
        ('Swahili-ready', 'Full Swahili localization support without layout breakage.'),
    ]:
        c.setFillColor(A(BG3, 0.65))
        c.rect(x, y - 14, cw, 13, fill=1, stroke=0)
        c.setFont('JBB', 7); c.setFillColor(GOLD)
        c.drawString(x + 8, y - 10, name)
        nw = c.stringWidth(name, 'JBB', 7)
        c.setFont('Inst', 7.5); c.setFillColor(A(TEXTSEC, 0.78))
        c.drawString(x + 8 + nw + 8, y - 10, desc[:85])
        y -= 16

    y -= 10
    c.setFont('JB', 7); c.setFillColor(A(BLUE, 0.7))
    c.drawString(x, y, 'SCALABILITY BENCHMARKS')
    y -= 8
    scale = [
        ['Stage', 'Users', 'Ops/sec', 'Architecture requirement'],
        ['Seed (now)', '<500', '88K', 'Monolith + managed cloud'],
        ['Series A', '5,000', '2M', 'Microservices, CDN edge'],
        ['Series B', '50,000', '20M', 'Multi-region, event sourcing'],
    ]
    table(c, x, y, scale, [cw*0.18, cw*0.14, cw*0.14, cw*0.54], rh=16, accent=BLUE, hdr_col=BLUE)


def gtm(c):
    fill_bg(c)
    grid(c, cell=36, alpha=0.016)
    header(c, 6, 'Go-to-Market')
    footer(c)
    orb(c, W * 0.86, H * 0.28, 90, CYAN, 18)

    x, y, cw = 36, H - 52, W - 72

    eyebrow(c, x, y, 9, 'Go-to-Market Strategy', GOLD)
    y -= 20

    c.setFont('JB', 7); c.setFillColor(A(TEXTMT, 0.9))
    c.drawString(x, y, 'HOW SCALABLE COMPANIES DO IT — AND HOW ACACIA ADAPTS')
    y -= 8
    bench = [
        ['Company', 'GTM Motion', 'Acacia Adaptation'],
        ['Stripe', 'Developer evangel → one API → expand full stack', 'Ops director trial → E-Manager → expand to syncAI'],
        ['Linear', 'Product-led → viral in eng teams → seat expansion', 'Ops manager proof → internal advocacy → enterprise roll-out'],
        ['Shopify', 'Free trial → merchant success → network effects', '30-day trial → referral + word of mouth (dominant in TZ)'],
    ]
    table(c, x, y, bench, [cw*0.12, cw*0.41, cw*0.47], rh=18, accent=GOLD, hdr_col=GOLD)
    y -= len(bench) * 19 + 20

    c.setFont('JB', 7); c.setFillColor(A(GOLD, 0.7))
    c.drawString(x, y, 'ACACIA GTM — THREE PHASES')
    y -= 12

    phases = [
        ('01', 'LAND', 'Now → Q3 2026', [
            'Target: TZ distributors, 20–100 employees',
            'Channel: Direct sales + referral',
            'Offer: Free 30-day E-Manager trial',
            'Lever: Live dashboard in first meeting',
        ], CYAN),
        ('02', 'EXPAND', 'Q4 2026 → Q2 2027', [
            'Upsell syncAI to E-Manager customers',
            'Expand to Kenya (Nairobi mid-market)',
            'M-Pesa Daraja v2 + NMB/CRDB integrations',
            'First regional logistics partnership',
        ], BLUE),
        ('03', 'PLATFORM', '2028+', [
            'Open syncAI SDK for developers',
            'Launch integration marketplace',
            'Expand to Uganda, Rwanda',
            'Platform network effects',
        ], INDIGO),
    ]

    pw = (cw - 8) / 3
    ph = 148

    for i, (num, title, period, items, col) in enumerate(phases):
        px_ = x + i * (pw + 4)
        py_ = y - ph
        c.setFillColor(A(BG3, 0.85))
        c.rect(px_, py_, pw, ph, fill=1, stroke=0)
        c.setFillColor(col)
        c.rect(px_, py_ + ph - 3, pw, 3, fill=1, stroke=0)
        c.setFont('BGB', 30); c.setFillColor(A(col, 0.09))
        c.drawString(px_ + 8, py_ + ph - 46, num)
        c.setFont('JBB', 7.5); c.setFillColor(col)
        c.drawString(px_ + 8, py_ + ph - 22, f'PHASE {num}  ·  {title}')
        c.setFont('JB', 6.5); c.setFillColor(A(TEXTMT, 0.9))
        c.drawString(px_ + 8, py_ + ph - 36, period)
        c.setStrokeColor(A(INDIGO, 0.2)); c.setLineWidth(0.4)
        c.line(px_ + 8, py_ + ph - 50, px_ + pw - 8, py_ + ph - 50)
        iy_ = py_ + ph - 66
        for item in items:
            c.setFillColor(A(col, 0.5)); c.circle(px_ + 14, iy_ + 3.5, 1.5, fill=1, stroke=0)
            c.setFont('Inst', 7.5); c.setFillColor(A(TEXTSEC, 0.85))
            mc = int((pw - 26) / 4.2)
            c.drawString(px_ + 22, iy_, item[:mc]); iy_ -= 16

    y -= ph + 22

    gline(c, x, y + 8, cw, INDIGO, GOLD, lw=0.6)
    c.setFont('JB', 7); c.setFillColor(A(SUCCESS, 0.7))
    c.drawString(x, y, 'PRICING MODEL — SAAS, PER SEAT')
    y -= 8
    pricing = [
        ['Tier', 'Price/month', 'Users', 'Includes'],
        ['Starter',    '$49',    'Up to 5',   'E-Manager core features'],
        ['Growth',     '$199',   'Up to 25',  'E-Manager + syncAI'],
        ['Enterprise', 'Custom', 'Unlimited', 'All products + dedicated support + custom integrations'],
    ]
    table(c, x, y, pricing, [cw*0.17, cw*0.14, cw*0.15, cw*0.54], rh=17, accent=SUCCESS, hdr_col=SUCCESS)


def milestones_competition(c):
    fill_bg(c)
    grid(c, cell=36, alpha=0.016)
    header(c, 7, 'Milestones & Competition')
    footer(c)

    x, y, cw = 36, H - 52, W - 72

    eyebrow(c, x, y, 10, 'Milestones & Timeline', CYAN)
    y -= 20

    milestones = [
        ('Q2 2026', 'E-Manager v2.0 public launch · First 10 paying customers', True),
        ('Q3 2026', 'syncAI general availability · M-Pesa Daraja v2 live', True),
        ('Q4 2026', '50 enterprise customers · Kenya market entry', False),
        ('Q1 2027', 'Series A raise ($2–4M) · Mobile PWA launch', False),
        ('Q2 2027', '200 enterprise customers · syncAI SDK beta', False),
        ('2028',    'Multi-country (UG, RW) · Platform marketplace', False),
    ]

    lx = x + 10
    # vertical spine
    c.setStrokeColor(A(INDIGO, 0.22))
    c.setLineWidth(0.8)
    c.line(lx, y - len(milestones) * 32, lx, y)

    my_ = y
    for quarter, milestone, hl in milestones:
        dy = my_ - 12
        if hl:
            c.setFillColor(CYAN); c.circle(lx, dy, 5, fill=1, stroke=0)
            c.setFillColor(A(CYAN, 0.14)); c.circle(lx, dy, 10, fill=1, stroke=0)
        else:
            c.setFillColor(A(INDIGO, 0.5)); c.circle(lx, dy, 3.5, fill=1, stroke=0)
        c.setFont('JBB', 8); c.setFillColor(CYAN if hl else A(BLUE, 0.9))
        c.drawString(lx + 18, my_ - 15, quarter)
        c.setFont('Inst', 8); c.setFillColor(A(TEXT, 0.85))
        c.drawString(lx + 18, my_ - 27, milestone[:60])
        my_ -= 32

    y = my_ - 20

    gline(c, x, y + 8, cw, BLUE, INDIGO, lw=0.6)
    eyebrow(c, x, y, 11, 'Competitive Landscape', BLUE)
    y -= 16

    comp = [
        ['Competitor', 'Strength', 'Weakness', 'Acacia Advantage'],
        ['SAP / Oracle', 'Global brand, enterprise scale', 'Cost $50K+/yr; no M-Pesa', '10x cheaper, built for local conditions'],
        ['QuickBooks Africa', 'Accounting familiarity', 'No workflow; no carrier APIs', 'Full operational layer, not just accounting'],
        ['Odoo', 'Open source, modular', 'Heavy customization; no AI layer', 'Out-of-box African commerce stack'],
        ['Local ERP startups', 'Regional presence', 'No AI, low reliability, poor UX', 'AI-native from day one, enterprise uptime'],
        ['WhatsApp + Sheets', 'Zero cost, familiarity', 'Non-auditable, unscalable', 'Migration path + import tools'],
    ]
    table(c, x, y, comp, [cw*0.19, cw*0.21, cw*0.27, cw*0.33], rh=15, accent=BLUE, hdr_col=BLUE)


def risk_benchmarking(c):
    fill_bg(c)
    grid(c, cell=36, alpha=0.016)
    header(c, 8, 'Risk & Benchmarking')
    footer(c)
    orb(c, W * 0.92, H * 0.68, 90, INDIGO, 18)

    x, y, cw = 36, H - 52, W - 72

    eyebrow(c, x, y, 12, 'Risk Analysis & Mitigations', GOLD)
    y -= 18

    risks = [
        ['Risk', 'Likelihood', 'Impact', 'Mitigation'],
        ['Carrier API changes (M-Pesa)', 'Medium', 'High', 'Abstract carrier layer; direct Safaricom relationship'],
        ['Customer churn from complexity', 'Medium', 'High', 'Free onboarding + 90-day dedicated success manager'],
        ['Bandwidth limits adoption', 'High', 'Medium', 'Offline-first architecture (P0 — non-negotiable)'],
        ['Regulatory changes', 'Low', 'High', 'In-region storage; legal counsel on TZ/KE data acts'],
        ['Fundraising delay', 'Medium', 'Medium', 'Revenue-first model; profitable at 50 customers'],
        ['Competitor market entry', 'Low', 'Medium', 'Context advantage; move fast on carrier integrations'],
    ]
    table(c, x, y, risks, [cw*0.27, cw*0.12, cw*0.10, cw*0.51], rh=16, accent=GOLD, hdr_col=GOLD)
    y -= len(risks) * 17 + 22

    gline(c, x, y + 8, cw, INDIGO, CYAN, lw=0.6)
    eyebrow(c, x, y, 13, 'Scalable Company Benchmarking', CYAN)
    y -= 18

    bench = [
        ['Dimension', 'Stripe', 'Linear', 'Shopify', 'Acacia Labs'],
        ['Core thesis', 'API-first payments', 'Speed-first PM', 'Merchant commerce', 'Ops-first African infra'],
        ['User focus', 'Developers', 'Eng teams', 'SMB merchants', 'East African operators'],
        ['Deployment', 'Global cloud', 'SaaS', 'Multi-channel', 'Regional, low-bandwidth'],
        ['Differentiation', 'Simplicity + reliability', 'Opinionated speed', 'Commerce stack', 'Context-native design'],
        ['PRD style', 'Problem→API→Metrics', 'Story→Sprint', 'Feature→Impact', 'Infra→System→Adoption'],
    ]
    table(c, x, y, bench, [cw*0.19, cw*0.17, cw*0.15, cw*0.17, cw*0.32], rh=15, accent=CYAN, hdr_col=CYAN)
    y -= len(bench) * 16 + 22

    if y > 110:
        c.setFont('JB', 7); c.setFillColor(A(CYAN, 0.7))
        c.drawString(x, y, 'ACACIA MOAT — WHAT COMPETITORS CANNOT REPLICATE')
        y -= 14
        for title, desc, col in [
            ('Context is the moat', 'M-Pesa depth, Swahili UX, offline resilience cannot be bolt-on features.', CYAN),
            ('Infrastructure, not features', 'We sell operational certainty, not software tools.', BLUE),
            ('Regional first, global capable', 'Built for Tanzania constraints; that scale wins everywhere else.', SUCCESS),
        ]:
            c.setFillColor(A(BG3, 0.72))
            c.rect(x, y - 22, cw, 20, fill=1, stroke=0)
            c.setFillColor(col); c.rect(x, y - 22, 2.5, 20, fill=1, stroke=0)
            c.setFont('InstB', 8.5); c.setFillColor(TEXT)
            c.drawString(x + 10, y - 9, title + ' —')
            tw = c.stringWidth(title + ' —', 'InstB', 8.5)
            c.setFont('Inst', 8.5); c.setFillColor(A(TEXTSEC, 0.78))
            c.drawString(x + 10 + tw + 4, y - 9, desc[:72])
            y -= 26


def back_cover(c):
    fill_bg(c)
    grid(c, cell=32, alpha=0.018)

    # Centred orb system
    cx_, cy_ = W/2, H/2
    orb(c, cx_, cy_, 290, INDIGO, 65)
    orb(c, cx_, cy_, 165, BLUE, 45)
    specular(c, cx_, cy_, 290)
    ring(c, cx_, cy_, 335, 128, INDIGO, 0.14, 0.7)
    ring(c, cx_, cy_, 390, 82,  CYAN,   0.07, 0.4)
    ring(c, cx_, cy_, 270, 270, BLUE,   0.06, 0.35)
    ring(c, cx_, cy_, 210, 42,  CYAN,   0.12, 0.5)

    # Dark veil over orb for text contrast
    c.setFillColor(A(BG, 0.52))
    c.rect(0, 0, W, H, fill=1, stroke=0)

    gline(c, 0, H - 52, W, INDIGO, CYAN, lw=1.2)

    c.setFont('BGB', 54); c.setFillColor(TEXT)
    c.drawCentredString(W/2, H/2 + 52, 'ACACIA LABS')

    c.setFont('Inst', 13); c.setFillColor(A(TEXTSEC, 0.68))
    c.drawCentredString(W/2, H/2 + 24, 'Operational Intelligence Infrastructure')

    gline(c, W/2 - 105, H/2 + 10, 210, INDIGO, CYAN, lw=0.9)

    c.setFont('Gloock', 16); c.setFillColor(A(TEXT, 0.58))
    c.drawCentredString(W/2, H/2 - 18, '"Context is the moat."')

    c.setFont('JB', 7); c.setFillColor(A(TEXTMT, 0.8))
    c.drawCentredString(W/2, H/2 - 52, 'DAR ES SALAAM, TANZANIA  ·  FOUNDED 2024')
    c.drawCentredString(W/2, H/2 - 68, 'E-MANAGER  ·  SYNCAI  ·  ENTERPRISE INFRASTRUCTURE')

    gline(c, 0, 52, W, INDIGO, CYAN, lw=1.2)
    c.setFont('JB', 6.5); c.setFillColor(A(TEXTMT, 0.68))
    c.drawCentredString(W/2, 34, 'CONFIDENTIAL — PRD v1.0 — REVIEWED QUARTERLY — NEXT: SEPTEMBER 2026')
    c.drawCentredString(W/2, 18, 'fahimkiama@acacialabs.co  ·  gwamaka@acacialabs.co')


# ── Build PDF ───────────────────────────────────────────────────────────────

OUTPUT = r'C:\Users\HP\Desktop\Acacia labs\Acacia_Labs_PRD.pdf'

doc = pdf_canvas.Canvas(OUTPUT, pagesize=A4)
doc.setTitle('Acacia Labs — Product Requirements Document v1.0')
doc.setAuthor('Fahim Kiama & Gwamaka Johas')
doc.setSubject('Operational Intelligence Infrastructure — PRD')
doc.setCreator('Acacia Labs Document System')

pages = [
    cover,
    exec_summary,
    market_personas,
    vision_emanager,
    syncai_tech,
    gtm,
    milestones_competition,
    risk_benchmarking,
    back_cover,
]

for fn in pages:
    fn(doc)
    doc.showPage()

doc.save()
print('PDF saved to: ' + OUTPUT)
print('Pages: ' + str(len(pages)))
print('Size: ' + str(os.path.getsize(OUTPUT)) + ' bytes')
